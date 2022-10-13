const SignUpModel = require("../models/signUpModels")

exports.signUp = async (req, res, next) => {
    const { name, username, email, password, profile } = req.body;
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