import express from "express";
import {connect} from "./db.js";
import router from "./router/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

connect();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.use("/api", router);