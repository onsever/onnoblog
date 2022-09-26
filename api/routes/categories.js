import express from "express";
import Category from "../models/Category.js";

const categoriesRoute = express.Router();

// Create Category
categoriesRoute.post("/", async (req, res) => {
    const newCategory = new Category(req.body);
    try {
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    } catch (err) {
        return res.status(500).json(err);
    }
});

// Get All Categories
categoriesRoute.get("/", async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        return res.status(500).json(err);
    }
});

export default categoriesRoute;