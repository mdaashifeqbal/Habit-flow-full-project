const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

const { generateToken } = require("../utils/generate-token");

const userModel = require("../models/user-model");
const habitModel = require("../models/habits-model");
const {isLoggedIn}=require("../middlewares/isLoggedIn")

const {
  userRegister,
  userLogin,
  me,
  userLogout,
} = require("../controllers/userControlls/user-auth");

router.get("/", (req, res) => {
  res.send("user route working properly");
});

//new user register route
router.post("/register", userRegister);

//existing user login route
router.post("/login", userLogin);

//get user details
router.post("/me",isLoggedIn,me);

//user logout route
router.post("/logout", userLogout);


module.exports = router;
