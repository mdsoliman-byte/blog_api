const express = require("express")
const app = express()

// DB Livery Import 
const mongoose = require("mongoose")

// MongoDb Connection 
const db_name = "blog_api_api";
const OPTION = { user: "", pass: "", autoIndex: true }
const URI = `mongodb://localhost:27017/${db_name}`
mongoose.connect(URI, OPTION, (error)=>{
    console.log(`DB Connection Success Full ! Your DB Name ${db_name} 😸 Your DB URI ${URI}`);
    console.log(error)
    
})

module.exports = app;