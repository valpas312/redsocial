import { Schema } from "mongoose";
import { ObjectId } from "mongodb";

export const PostSchema = new Schema({
    _id: ObjectId,
    title: String,
    content: String,
});