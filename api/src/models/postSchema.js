import mongoose from "mongoose";

const postSchema = new mongoose.Schema({});

export const Post = mongoose.model("post", postSchema);
