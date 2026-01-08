const mongoose = require("mongoose");

const User = require("../../models/user-model");
const Habit = require("../../models/habits-model");

//new habit create 
module.exports.createHabit = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    const { title, description } = req.body;

    //validation check
    if (!title?.trim() || !description?.trim())
      return res.status(400).json({
        success: false,
        message: "Title and description are required",
      });

    //start transation session
    session.startTransaction();

    //create habit operation code
    const [habit] = await Habit.create(
      [
        {
          title: title.trim(),
          description: description.trim(),
          userId: req.user._id,
        },
      ],
      { session }
    );

    //update user habits array as habit objectId
    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        $push: { habits: habit._id },
      },
      { session, new: true }
    );

    //check user is still available
    if (!user) {
      throw new Error("USER_NOT_FOUND");
    }

    //commit transaction session
    await session.commitTransaction();

    //send successful response if all things happen correct
    return res.status(201).json({
      success: true,
      message: "Habit created successfully",
      habit,
    });
  } catch (err) {
    //abort transaction if anything happen wrong
    await session.abortTransaction();

    //for backend purpose to check error
    console.error("created habit failed ", err);

    //send response if user not found
    if (err.message === "USER_NOT_FOUND") {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    //send internal server error
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  } finally {
    //finally end session
    session.endSession();
  }
};

//get all habits
module.exports.getHabits=async (req, res) => {
  try {
    const habits = await Habit.find({ userId: req.user._id }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      message:
        habits.length === 0 ? "No habits found" : "Habits fetched successfully",
      habits: habits,
    });
  } catch (err) {
    console.log("error while fetching habits ", err.message);
    return res
      .status(500)
      .json({ success: false, message: "internal server error" });
  }
}

//habit mark as complete
module.exports.markAsComplete=async (req, res) => {
  try {
    //check habit id is valid or not
    if (!mongoose.Types.ObjectId.isValid(req.params.habitId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid habit id",
      });
    }

    //find habit by id
    const habit = await Habit.findOne({
      _id: req.params.habitId,
      userId: req.user._id,
    });

    //is habit exist by id
    if (!habit)
      return res.status(404).json({
        success: false,
        message: "Habit note found",
      });

    //date range
    const startofToday = new Date();
    startofToday.setHours(0, 0, 0, 0);

    const endofToday = new Date();
    endofToday.setHours(23, 59, 59, 999);

    //check the habit is already mark as completed
    const isAlreadyCompleted = habit.completedDates.some(
      (d) => d >= startofToday && d <= endofToday
    );

    if (isAlreadyCompleted)
      return res
        .status(409)
        .json({ success: false, message: "Habit already completed" });

    //store exact time stamps
    habit.completedDates.push(new Date());
    await habit.save();
    return res
      .status(200)
      .json({ success: true, message: "Habit marked as completed" });
  } catch (err) {
    console.log("error while habit mark as completed ", err.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}