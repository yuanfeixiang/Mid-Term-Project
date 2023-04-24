const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const compression = require("compression");

// json 형태로 parsing || 중첩가능 || 압축해서 전송
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// react
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(8000, function () {
  console.log("8000 port is listening!");
});
