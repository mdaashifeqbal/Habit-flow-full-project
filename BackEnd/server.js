const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");

require("./config/mongoose-connect");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", require("./routes/user-routes"));

app.listen(3000, () => {
  console.log("server running on port 3000");
});