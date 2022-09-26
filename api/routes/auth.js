import express from "express";
import User from "../models/User.js";
import bcrpyt from "bcrypt";

const authRoute = express.Router();

// Sign Up
authRoute.post("/signup", async (req, res) => {
    try {
        const salt = await bcrpyt.genSalt(10);
        const hashedPass = await bcrpyt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
});

// Login
authRoute.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username});
        await bcrpyt.compare(req.body.password, user.password);
        const {password, ...userInfo} = user._doc;

        res.status(200).json(userInfo);
    } catch (err) {
        return res.status(500).json(err);
    }
})

export default authRoute;