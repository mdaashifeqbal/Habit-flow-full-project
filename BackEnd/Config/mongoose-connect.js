const mongoose = require("mongoose");

module.exports = mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongodb database connected successfully");
  })
  .catch((err) => {
    console.log("error while connecting to database ", err.message);
  });
