const jwt = require("jsonwebtoken");

module.exports.generateToken = (user) => {
  try {
    return jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_KEY);
  } catch (err) {
    console.log("error while generating token ", err.message);
  }
};
