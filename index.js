const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");
const reviewRouter = require("./routes/review");

const app = express();
const port = 3000;
app.use(express.json());

(async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb is connected to", db.connection.host);
  } catch (error) {
    console.error(error);
  }
})();


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/reviews", reviewRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
