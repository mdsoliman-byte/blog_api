const app = require("./app")
require("dotenv").config()
const PORT = process.env.WEB_PORT ;







app.listen(PORT , ()=>{
    console.log(`Server Is Running ${PORT } port 😸  `)
})