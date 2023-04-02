import express from "express";
import {connect} from "./db.js";
import router from "./router/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/api", router);

connect();

app.get("/", (req, res) => {
    res.send("Hello World");
});