const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const connectToDb = require("./db/db");
connectToDb();
const userRoutes = require("./routes/users.routes");

app.get("/", (req, res) => {
  res.send("Helo world");
});

app.use("/users", userRoutes);

module.exports = app;
