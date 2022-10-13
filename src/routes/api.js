const express = require("express");
const signUpcontroller = require("../controllers/signUpcontroller")
const router = express.Router();
router.post("/signUp", signUpcontroller.signUp)




module.exports = router;