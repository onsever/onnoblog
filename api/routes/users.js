import express from "express";
import User from "../models/User.js";
import bcrpyt from "bcrypt";

const userRoute = express.Router();

// Update User
userRoute.put("/:id", async (req, res) => {
    if (req.body.id === req.params.id) {
        if (req.body.password) {
            const salt = await bcrpyt.genSalt(10);
            req.body.password = await bcrpyt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {new: true});
            res.status(200).json(updatedUser);
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        res.status(401).json("You can only update your account!");
    }

});

// Get User
userRoute.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...userInfo} = user._doc;
        res.status(200).json(userInfo);
    } catch (err) {
        return res.status(500).json(err);
    }
})


export default userRoute;