const express = require("express");
const mongoose = require("mongoose");
const {
  MONGO_IP,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USER
} = require("./config/config");
const postRouter = require("./routes/post");
const cors = require("cors");



const app = express();
app.use(cors());
const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
  mongoose
      .connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => console.log("successfully connected to db"))
      .catch((e) => {
        console.log(e);
        setTimeout(connectWithRetry, 5000); // try to reconnect to db if fail
      });
};

connectWithRetry();

app.use(express.json());

// setting up a quick route for testing purposes
app.get("/", (req, res) => {
  res.send("<h2>Hello there</h2>")
});

//app.use("/api/v1/posts", postRouter);
app.use("/posts", postRouter);
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listening on port ${port}`));