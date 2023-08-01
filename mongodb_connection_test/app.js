var express = require("express")
var app = express();
const {MongoClient} = require("mongodb")
require("dotenv").config()
let greeting = process.env.TEST_VAR
console.log(greeting)
