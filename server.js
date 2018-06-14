const express = require("express");
var mongojs = require("mongojs");

const cheerio = require("cheerio");
var request = require("request");


const app = express();
const PORT = process.env.PORT || 8080;