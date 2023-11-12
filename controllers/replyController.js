const express = require("express");
const { checkBody } = require("../middlewares/validations");
const { getReplies, createReply } = require("../queries/replies");
const replies = express.Router();

/** get */
replies.get("/:id", async (req, res) => {
    const { id } = req.params;

    const message = await getReplies(id);
    if(message[0] && message.length >= 1){
        //no query, show everything
        res.status(200).json({ success: true, data: { payload: message[0] } });
    }
    else{
        //do something for queries
        res.status(404).json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

replies.post("/", async (req, res) => {
    //const {name, artist, album, time, is_favorite} = req.body;
    const forums = await createReply(req.body);
    if(forums){
        res.status(200).json(forums);
    }
    else{
        res.status(400).json("wrong");
    }
});

/** delete */
/*
replies.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const message = await delete(id);
    if(message){
        res.status(200).json(message);
    }
    else{
        res.status(404).json("wrong");
    }
});
*/
/** page 404 */
replies.get("*", (req, res) => {
    res.status(404).send("with incorrect id - sets status to 404 and returns error key");
});

module.exports = forums;