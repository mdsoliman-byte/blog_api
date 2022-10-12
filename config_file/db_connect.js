const mongoose = require("mongoose")
const db_name = "blog_api_api";
const OPTION = { user: "", pass: "", autoIndex: true }
const URI = `mongodb://localhost:27017/${db_name}`
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