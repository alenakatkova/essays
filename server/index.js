const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const redis = require("redis");
const {
  MONGO_IP,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USER,
  REDIS_URL,
  REDIS_PORT,
  SESSION_SECRET,
} = require("./config/config");
let RedisStore = require("connect-redis")(session);
let redisClient = redis.createClient({
  host: REDIS_URL,
  port: REDIS_PORT,
});

const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const essayRouter = require("./routes/essay");
const languageRouter = require("./routes/language");
const testRouter = require("./routes/test");

const app = express();

app.use(cors());

const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("successfully connected to mongo-seed"))
    .catch((e) => {
      console.log(e);
      setTimeout(connectWithRetry, 5000); // try to reconnect to mongo-seed if fail
    });
};

connectWithRetry();

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    secret: SESSION_SECRET,
    resave: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 60000,
    },
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h2>Hello there</h2>");
});

app.use("/posts", postRouter);
app.use("/essays", essayRouter);
app.use("/users", userRouter);
app.use("/languages", languageRouter);
app.use("/tests", testRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listening on port ${port}`));
