const express = require("express");
const mongojs = require("mongojs");
const bodyParser = require("body-parser");


const cheerio = require("cheerio");
const request = require("request");

const db = require("./models");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));


app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
})