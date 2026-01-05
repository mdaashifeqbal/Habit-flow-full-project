const jwt = require("jsonwebtoken");

module.exports.isLoggedIn = (req, res, next) => {
  try {
    const token = req.cookies.user_Token;
    if (!token)
      return res.status(401).json({
        message: "Unauthorized, login again please",
        success: false,
      });

    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    console.log("error while verifying token ", err.message);
    res.status(401).json({
      message: "Invalid or expired token",
      success: false,
    });
  }
};
