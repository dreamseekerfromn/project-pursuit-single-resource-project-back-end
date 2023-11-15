const express = require("express");
const { getAllMessages, getOneMessage, deleteOneMessage, createMessage } = require("../queries/posts");
const { checkBody } = require("../middlewares/validations");
const posts = express.Router();

/** get */
posts.get("/", async (req, res) => {
    const messages = await getAllMessages();
    console.log(messages);
    if(messages[0]){
        //no query, show everything
        res.status(200).json({ success: true, data: { payload: messages } });
    }
    else{
        //do something for queries
        res.status(200).json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

posts.get("/:id", async (req, res) => {
    const { id } = req.params;
    console.log("id is ..." + id)
    const message = await getOneMessage(id);
    console.log(message)
    if(message[0] && message.length >= 1){
        //no query, show everything
        res.status(200).json({ success: true, data: { payload: message[0] } });
    }
    else{
        //do something for queries
        res.status(404).json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

posts.post("/", checkBody, async (req, res) => {
    //const {name, artist, album, time, is_favorite} = req.body;
    try{
        const posts = await createMessage(req.body);
        console.log(posts)
        //res.json(posts);
    } catch(error) {
        res.status(400).json({error: "something missing in your header"});
    }
});

/** delete */
posts.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const message = await deleteOneMessage(id);
    if(message){
        res.status(200).json(message);
    }
    else{
        res.status(404).json("wrong");
    }
});

/** page 404 */
posts.get("*", (req, res) => {
    res.status(404).send("with incorrect id - sets status to 404 and returns error key");
});

module.exports = posts;