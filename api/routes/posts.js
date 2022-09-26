import express from "express";
import User from "../models/User.js";
import Post from "../models/Post.js";

const postsRoute = express.Router();

// Create Post
postsRoute.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        return res.status(500).json(err);
    }
});

// Update Post
postsRoute.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true});
            res.status(200).json(updatedPost);
        } else {
            res.status(401).json("You can update your post only.");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});

// Delete Post
postsRoute.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            await post.delete();
            res.status(200).json("Post has been deleted!");
        } else {
            res.status(401).json("You can delete your post only.");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});

// Get Post
postsRoute.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        return res.status(500).json(err);
    }
});

// Get All Posts
postsRoute.get("/", async (req, res) => {
    const username = req.query.user;
    const category = req.query.cat;

    try {
        let posts;
        if (username) {
            posts = await Post.find({username});
        } else if (category) {
            posts = await Post.find({categories: {
                $in: [category]
            }});
        } else {
            posts = await Post.find();
        }

        res.status(200).json(posts);
    } catch (err) {
        return res.status(500).json(err);
    }
});

export default postsRoute;