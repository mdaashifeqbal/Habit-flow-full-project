const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const User = require("../models/user-model");
const Habit = require("../models/habits-model");

const { isLoggedIn } = require("../middlewares/isLoggedIn");

const {
  createHabit,
  getHabits,
  markAsComplete,
} = require("../controllers/habitsControls/habit-controlls");

router.get("/", (req, res) => {
  res.send("habit route working properly");
});

//habit create route api
router.post("/create-habit", isLoggedIn, createHabit);

//get all habits
router.get("/get-habits", isLoggedIn, getHabits);

//habit mark as completed route api
router.post("/completed/:habitId", isLoggedIn, markAsComplete);

//delete habits route api
router.delete("/delete-habit/:habitId", isLoggedIn, async (req, res) => {
  try {
    //check habit id is valid or not
    if (!mongoose.Types.ObjectId.isValid(req.params.habitId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid habit id",
      });
    }

    const deletedHabit = await Habit.findByIdAndDelete(req.params.habitId);

    if (!deletedHabit)
      return res
        .status(404)
        .json({ success: false, message: "No habit found" });

    // 2️⃣ Remove habitId from user's habits array
    await User.findByIdAndUpdate(
      req.user._id,
      { $pull: { habits: req.params.habitId } },
      { new: true }
    );

    return res
      .status(200)
      .json({ success: false, message: "Habits deleted successfully" });
  } catch (err) {
    console.log("error while deleting habit ", err.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
