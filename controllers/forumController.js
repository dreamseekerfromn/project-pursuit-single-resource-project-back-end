const express = require("express");
const { getAllMessages, getOneMessage, deleteOneMessage, createMessage } = require("../queries/forums");
const { checkBody } = require("../middlewares/validations");
const forums = express.Router();

/** get */
forums.get("/", async (req, res) => {
    const messages = await getAllMessages();
    console.log(messages);
    if(messages[0]){
        //no query, show everything
        res.status(200).json(messages);
    }
    else{
        //do something for queries
        res.status(200).json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

forums.get("/:id", async (req, res) => {
    const { id } = req.params;

    const message = await getOneMessage(id);
    if(message[0] && message.length >= 1){
        //no query, show everything
        res.status(200).json(message[0]);
    }
    else{
        //do something for queries
        res.status(404).json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

forums.post("/", checkBody, async (req, res) => {
    //const {name, artist, album, time, is_favorite} = req.body;
    const forums = await createMessage(req.body);
    if(forums){
        res.status(200).json(forums);
    }
    else{
        res.status(400).json("wrong");
    }
});

/** delete */
forums.delete("/:id", async (req, res) => {
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
forums.get("*", (req, res) => {
    res.status(404).send("with incorrect id - sets status to 404 and returns error key");
});

module.exports = forums;