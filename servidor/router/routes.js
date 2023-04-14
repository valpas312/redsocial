import express from "express";
import { client } from "../db.js";
import { ObjectId } from "mongodb";

const router = express.Router();

//Get Petitions
router.get("/posts", async (req, res) => {
    const postsCollection = client.db("redsocial").collection("posts");
    const posts = await postsCollection.find().toArray();
    res.json(posts);
});

router.get("/comments", async (req, res) => {
    const commentsCollection = client.db("redsocial").collection("comments");
    const comments = await commentsCollection.find().toArray();
    res.json(comments);
});

router.get("/messages", async (req, res) => {
    const messagesCollection = client.db("redsocial").collection("messages");
    const messages = await messagesCollection.find().toArray();
    res.json(messages);
});

router.get("/chats", async (req, res) => {
    const chatsCollection = client.db("redsocial").collection("chats");
    const chats = await chatsCollection.find().toArray();
    res.json(chats);
});

//Get Petitions by ID
router.get("/posts/:_id", async (req, res) => {
    const postsCollection = client.db("redsocial").collection("posts");
    const post = await postsCollection.findOne({ _id: new ObjectId(req.params._id) });
    res.json(post);
});

router.get("/comments/:_id", async (req, res) => {
    const commentsCollection = client.db("redsocial").collection("comments");
    const comment = await commentsCollection.findOne({ _id: new ObjectId(req.params._id) });
    res.json(comment);
});

router.get("/chats/:_id", async (req, res) => {
    const chatsCollection = client.db("redsocial").collection("chats");
    const chat = await chatsCollection.findOne({ _id: new ObjectId(req.params._id) });
    res.json(chat);
});

//Post Petitions
router.post("/posts", async(req, res) => {
    const postsCollection = client.db("redsocial").collection("posts");
    const result = await postsCollection.insertOne(req.body);
    res.json(result);
});

router.post("/comments", async (req, res) => {
    const commentsCollection = client.db("redsocial").collection("comments");
    const result = await commentsCollection.insertOne(req.body);
    res.json(result);
});

router.post("/messages", async (req, res) => {
    const messagesCollection = client.db("redsocial").collection("messages");
    const result = await messagesCollection.insertOne(req.body);
    res.json(result);
});

router.post("/chats", async (req, res) => {
    const chatsCollection = client.db("redsocial").collection("chats");
    const result = await chatsCollection.insertOne(req.body);
    res.json(result);
});

//Delete Petitions
router.delete("/posts/:_id", async (req, res) => {
    const postsCollection = client.db("redsocial").collection("posts");
    const result = await postsCollection.deleteOne({ _id: new ObjectId(req.params._id) });
    res.json(result);
});

router.delete("/comments/:_id", async (req, res) => {
    const commentsCollection = client.db("redsocial").collection("comments");
    const result = await commentsCollection.deleteOne({ _id: new ObjectId(req.params._id) });
    res.json(result);
});

router.delete("/messages/:_id", async (req, res) => {
    const messagesCollection = client.db("redsocial").collection("messages");
    const result = await messagesCollection.deleteOne({ _id: new ObjectId(req.params._id) });
    res.json(result);
});

router.delete("/chats/:_id", async (req, res) => {
    const chatsCollection = client.db("redsocial").collection("chats");
    const result = await chatsCollection.deleteOne({ _id: new ObjectId(req.params._id) });
    res.json(result);
});

//put petitions
router.put("/posts/:_id", async (req, res) => {
    const postsCollection = client.db("redsocial").collection("posts");
    const result = await postsCollection.updateOne({ _id: new ObjectId(req.params._id) }, { $set: req.body });
    res.json(result);
});

router.put("/chats/:_id", async (req, res) => {
    const chatsCollection = client.db("redsocial").collection("chats");
    const result = await chatsCollection.updateOne({ _id: new ObjectId(req.params._id) }, { $set: req.body });
    res.json(result);
});

router.put("/messages/:_id", async (req, res) => {
    const messagesCollection = client.db("redsocial").collection("messages");
    const result = await messagesCollection.updateOne({ _id: new ObjectId(req.params._id) }, { $set: req.body });
    res.json(result);
});

//export
export default router;