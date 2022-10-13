const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const dbConnection = require("./src/config_file/db_connect")
// DB Livery Import 
const router = require("./src/routes/api")
// body-parser implement 
app.use(bodyParser.json())
// MongoDb Connection 
dbConnection()
// Router Location SetUp
app.use("/api/v1", router)
// Undefined Route
app.use("*", (req, res) => {
    res.status(404).json({ status: "SORRY", message: "WE CANNOT FIND YOUR ROUTES" })
})


module.exports = app;