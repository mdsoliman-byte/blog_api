const SignUpModel = require("../models/signUpModels")
const bcrypt = require("bcrypt")
exports.signUp = async (req, res, next) => {

    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password = await bcrypt.hash(req.body.password, 15);
    const profile = req.body.profile;

    try {
        const user = await SignUpModel.create({
            name,
            username,
            email,
            password,
            profile
        })
        res.status(201).json({
            status: "SUCCESS FULL",
            message: `WELCOME ${name} YOUR ACCOUNT CREATE SUCCESS `,
            data: user
        })
    } catch (error) {
        res.status(401).json({
            status: "Fail",
            message: "User Create Failed ",
            data: error
        })
    }
}