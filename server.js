const express = require("express");
const mongojs = require("mongojs");
const bodyParser = require("body-parser");


const cheerio = require("cheerio");
var request = require("request");


const app = express();
const PORT = process.env.PORT || 8080;



app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
})