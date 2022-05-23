const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
console.log(process.env);
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Alpha Tools Server");
});

app.listen(port, () => {
  console.log("Listening to port ->", port);
});
