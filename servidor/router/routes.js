import express from "express";
import { client } from "../db.js";


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
router.get("/posts/:id", async (req, res) => {
    const postsCollection = client.db("redsocial").collection("posts");
    const post = await postsCollection.findOne({ _id: req.params.id });
    res.json(post);
});

router.get("/comments/:id", async (req, res) => {
    const commentsCollection = client.db("redsocial").collection("comments");
    const comment = await commentsCollection.findOne({ _id: req.params.id });
    res.json(comment);
});

router.get("/chats/:id", async (req, res) => {
    const chatsCollection = client.db("redsocial").collection("chats");
    const chat = await chatsCollection.findOne({ _id: req.params.id });
    res.json(chat);
});

//Post Petitions
router.post("/posts/add", async(req, res) => {
    const postsCollection = client.db("redsocial").collection("posts");
    const result = await postsCollection.insertOne(req.body);
    res.json(result);
});

router.post("/comments/add", async (req, res) => {
    const commentsCollection = client.db("redsocial").collection("comments");
    const result = await commentsCollection.insertOne(req.body);
    res.json(result);
});

router.post("/messages/add", async (req, res) => {
    const messagesCollection = client.db("redsocial").collection("messages");
    const result = await messagesCollection.insertOne(req.body);
    res.json(result);
});

router.post("/chats", async (req, res) => {
    const chatsCollection = client.db("redsocial").collection("chats");
    const result = await chatsCollection.insertOne(req.body);
    res.json(result);
});

//export
export default router;