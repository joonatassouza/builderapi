const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const server = require("http").Server(app);

mongoose.connect(
  "mongodb+srv://sa:123@cluster0-w58aj.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.use(bodyParser.json());

app.use(cors());

app.use(require("./routes.js"));

server.listen(process.env.PORT || "3333");
