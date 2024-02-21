const express = require("express");
const { testDbConnection } = require("./db");
const app = express();
const authRouter = require("./routes/authRouter");

// for initial testing
app.get("/", (req, res) => {
  res.send("Hello!");
});

testDbConnection();

// mount router
app.use("/auth", authRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("app is listening on port: ", port);
});
