const express = require("express");
const { testDbConnection } = require("./db");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello!");
});

testDbConnection();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("app is listening on port: ", port);
});
