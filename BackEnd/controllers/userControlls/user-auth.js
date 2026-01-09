const userModel = require("../../models/user-model");
const habitModel = require("../../models/habits-model");
const bcrypt = require("bcrypt");

const { generateToken } = require("../../utils/generate-token");

//create user
module.exports.userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res
        .status(400)
        .json({ message: "All fields are required", success: true });

    const isUserexist = await userModel.findOne({ email });
    if (isUserexist)
      return res
        .status(409)
        .json({ message: "User already exists", success: false });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    const token = generateToken(newUser);
    res.cookie("user_Token", token, {
      httpOnly: true,
      sameSite:"none",
    });

    res.status(201).json({
      message: "User registered successful",
      success: true,
      userName: newUser.name,
      email: newUser.email,
    });
  } catch (err) {
    console.log("error from creating user ".err.message);
    res.status(500).json({ message: "internal server error", message: false });
  }
};

//login user
module.exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });

    const user = await userModel.findOne({ email }).select("+password");

    if (!user)
      return res
        .status(404)
        .json({ message: "User not found", success: false });

    const originalPassword = await bcrypt.compare(password, user.password);

    if (!originalPassword)
      return res
        .status(401)
        .json({ message: "Invalid credentials", success: false });

    const token = generateToken(user);
    res.cookie("user_Token", token, {
      httpOnly: true,
      sameSite: "none",
    });

    res.status(200).json({
      message: "Login successful",
      success: true,
      userName: user.name,
      userEmail: user.email,
    });
  } catch (err) {
    console.log("error while login to user ", err.message);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

//send user details
module.exports.me = async (req, res) => {
  try {
    const user = await userModel
      .findById(req.user._id)
      .select("name email");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

//user logout
module.exports.userLogout = (req, res) => {
  res.clearCookie("user_Token", {
    httpOnly: true,
    sameSite: "none",
  });

  res.status(200).json({
    message: "Logged out successfully",
    success: true,
  });
};