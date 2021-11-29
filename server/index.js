const express = require("express");
const mongoose = require("mongoose");
const {
  MONGO_IP,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USER
} = require("./config/config");

const app = express();

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
app.get("/api", (req, res) => {
  res.send("<h2>Hi there</h2>")
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listening on port ${port}`));