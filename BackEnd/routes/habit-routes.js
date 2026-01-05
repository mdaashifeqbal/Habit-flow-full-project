const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const User = require("../models/user-model");
const Habit = require("../models/habits-model");

const { isLoggedIn } = require("../middlewares/isLoggedIn");

const {
  createHabit,
  markAsComplete,
} = require("../controllers/habitsControls/habit-controlls");

router.get("/", (req, res) => {
  res.send("habit route working properly");
});

//habit create route api
router.post("/create", isLoggedIn, createHabit);

//habit mark as completed route api
router.post("/completed/:habitId", isLoggedIn, markAsComplete);

//get all habits
router.get("/get-habits", isLoggedIn, async (req, res) => {
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
});
module.exports = router;
