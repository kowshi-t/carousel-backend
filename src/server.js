var express = require("express");
var dbConnection = require("./db/init");
var bodyParser = require("body-parser");
var router = require("./route");
require("dotenv").config();
const cors = require("cors");

var server = express();
var runningPort = process.env.PORT || 3600;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(
  cors({
    origin: "*",
  })
);
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
server.use("/api", router);

dbConnection();

// server.get("/", (req, res) => {
//   res.send("GET IS WORKING");
// });

server.listen(runningPort, function () {
  console.log("Server started on port:", runningPort);
});
