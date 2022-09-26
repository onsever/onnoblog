import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import dotenv from "dotenv";

import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import postsRoute from "./routes/posts.js";
import categoriesRoute from "./routes/categories.js";

dotenv.config({path: "api/.env"});
const app = express();
app.use(express.json());

mongoose.connect(process.env.DB)
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
    console.log(err);
});

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "assets");
    },
    filename: (req, file, callback) => {
        callback(null, req.body.name);
    }
});

const upload = multer({storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
   res.status(200).json("File has been uploaded.");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoriesRoute);

app.listen("3000", () => {
    console.log("Backend is running.");
});