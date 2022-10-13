const mongoose = require("mongoose")
require("dotenv").config()
const db_name = process.env.DB_NAME;
const OPTION = { user: process.env.DB_USER, pass: process.env.DB_PASS, autoIndex: true }
const URI = `${process.env.DB_URI}${db_name}`
const dbConnection = async () => {
    try {
        await mongoose.connect(URI, OPTION, () => {
            console.log(`DB Connection Success Full ! Your DB Name ${db_name} 😸 Your DB URI ${URI}`);


        })
    } catch (error) {
        console.log(error)
    }
}
module.exports = dbConnection