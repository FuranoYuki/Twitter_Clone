const express = require('express');
const routes = express.Router();
const User = require("../models/User");
const JWT = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const authRoute = require("../middlewares/authMiddleware");

function createToken(params = {}){
    const token = JWT.sign({id: params.id}, process.env.SECRET_API, {
        expiresIn: 86400
    })

    return token
}


routes.post("/signup", async (req, res) => {
    try {
        if(await User.findOne({email: req.body.email}))
            return res.status(400).send("email already in using")

        const user = await User.create(req.body);

        user.password = undefined

        const token = createToken(user)

        return res.send({user, token});
        
    } catch (error) {
        res.status(400).send({
            warning: 'error at create user',
            error
        })
        console.log(error);
    }
});

routes.post("/login", async (req, res) => {
    const {email, password} = req.body;

    try {

        const user = await User.findOne({email}).select("+password");

        if(!user)
            return res.status(400).send("Email doesn't registered");
        
        console.log(user.password, password, await bcrypt.compare(password, user.password));

        if(! await bcrypt.compare(password, user.password))
            return res.status(400).send("Password incorrect!")

        user.password = undefined

        const token = createToken(user);

        return res.send({user, token})
        
    } catch (error) {
        return res.status(400).send("Error at try login");
    }
})

routes.delete("/delete", authRoute, async(req, res) => {
    try {

        await User.findByIdAndDelete(req.userId);

        return res.send(user);
    } catch (error) {
        return res.status(400).send("error at delete account");
    }
})


module.exports = app => app.use("/", routes);
