const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))

require("dotenv").config();
const cookieParser = require("cookie-parser");

require("./config/mongoose-connect");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", require("./routes/user-routes"));
app.use("/api/auth",require("./routes/protected-route"));
app.use("/api/habit", require("./routes/habit-routes"));

app.listen(3000, () => {
  console.log("server running on port 3000");
});
