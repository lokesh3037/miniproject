//import express
var express = require("express");
//import bodyparser module
var bodyparser = require("body-parser");
//create Rest Object
var app = express();
//set the JSON As MIME Type
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({'extended':false}));
//import login
var login = require("./login/login");
app.use("/login",login);
//import about module
var about = require("./detailsModule/about/aboutRouting/about");
app.use("/about",about);
//import portfolio
var portfolio = require("./detailsModule/portfolio/portfolio");
app.use("/portfolio",portfolio);
//assign the port no.
app.listen(8080);
console.log("Server Listening the Port No.8080");