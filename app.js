const express = require("express")
const app = express()
const dbConnection = require("./config_file/db_connect")
// DB Livery Import 
const mongoose = require("mongoose")

// MongoDb Connection 

dbConnection()

module.exports = app;