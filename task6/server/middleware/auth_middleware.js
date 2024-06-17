const jwt = require("jsonwebtoken");
const userModel = require("../model/user_model");

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.Token;
        if (!token) {
            throw new Error("No authentication token, please log in");
        }
        const verify = jwt.verify(token, process.env.privateKey);
        const user = await userModel.findOne({ "tokens.token": token });

        if (!user) {
            throw new Error("User not found");
        }

        req.user = user;
        next();
        
    } catch (error) {
        console.log(error);
        res.status(401).send(error.message);
    }
}

module.exports = auth;
