const express = require("express");
const cors = require("cors");
const app = express();
const forums = require('./controllers/postController.js');
const replies = require("./controllers/replyController.js");

app.use(cors());
app.use(express.json());

// root
app.get("/", (request, response) => {
    response.send("Hello World!");
});

app.use("/posts", forums);
app.use("/replies", replies);

// 404 Page not found
app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
});

module.exports = app;