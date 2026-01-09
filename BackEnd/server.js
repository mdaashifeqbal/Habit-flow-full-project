const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(
  cors({
    origin: "https://habit-flow-7rfz.onrender.com",
    credentials: true,
  })
);

require("dotenv").config();
const cookieParser = require("cookie-parser");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongodb database connected successfully");
  })
  .catch((err) => {
    console.log("error while connecting to database ", err.message);
  });

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", require("./routes/user-routes"));
app.use("/api/auth", require("./routes/protected-route"));
app.use("/api/habit", require("./routes/habit-routes"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running on port 3000");
});
