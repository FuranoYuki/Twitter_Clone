//dependecies
const express = require("express")
const routes = express.Router();

//authMiddleware
const authRoute = require("../middlewares/authMiddleware");

//model
const User = require("../models/User");

routes.post("/update", async(req, res) => {
    console.log(req.userId);
    try {
        const user = await User.findByIdAndUpdate(req.userId, req.body, {new: true});

        return res.send(user);
    } catch (error) {
        return res.status(400).send("failed at update user");
    }
});

routes.get("/showAll", async(req, res) => {
    try {
        const user = await User.find();

        return res.send(user);
    } catch (error) {
        console.log(error);

        return res.status(400).send("error at show all users")
    }   
})

module.exports = app => app.use("/user", authRoute, routes);