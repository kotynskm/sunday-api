const express = require("express");
const { testDbConnection } = require("./db");
const app = express();
const authRouter = require("./routes/authRouter");
const bodyParser = require("body-parser");

// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

testDbConnection();

// mount router
app.use("/auth", authRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("app is listening on port: ", port);
});
