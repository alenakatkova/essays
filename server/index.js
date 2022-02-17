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

const userRouter = require("./routes/user");
const essayRouter = require("./routes/essay");
const languageRouter = require("./routes/language");
const testRouter = require("./routes/test");
const levelRouter = require("./routes/level");
const currentSessionRouter = require("./routes/currentSession");

const app = express();

app.use(cors({ origin: true, credentials: true }));

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
      httpOnly: false,
      maxAge: 30000,
    },
  })
);

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("<h2>Hello there</h2>");
});

app.use("/api/essays", essayRouter);
app.use("/api/users", userRouter);
app.use("/api/languages", languageRouter);
app.use("/api/tests", testRouter);
app.use("/api/levels", levelRouter);
app.use("/api/current_session", currentSessionRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listening on port ${port}`));
