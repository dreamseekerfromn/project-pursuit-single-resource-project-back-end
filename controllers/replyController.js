const express = require("express");
const { checkBody } = require("../middlewares/validations");
const { getReplies, createReply, deleteOneReply, updateReply } = require("../queries/replies");
const replies = express.Router();

/** get */
replies.get("/:id", async (req, res) => {
    const { id } = req.params;

    const message = await getReplies(id);
    try{
        //no query, show everything
        res.status(200).json({ success: true, data: { payload: message } });
    }
    catch(err){
        //do something for queries
        res.status(404).json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

replies.post("/", async (req, res) => {
    //const {name, artist, album, time, is_favorite} = req.body;

    const posts = await createReply(req.body);
    
    if(posts){
        res.status(200).json(posts);
    }
    else{
        res.status(400).json("wrong");
    }
});

/** delete */

replies.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const message = await deleteOneReply(id, req.body);
    if(message){
        res.status(200).json(message);
    }
    else{
        res.status(404).json("wrong");
    }
});

replies.put("/:id", async (req, res) => {
    const {id} = req.params;

    const reply = await updateReply(id, req.body);
    if(reply){
        res.status(200).json(reply);
    }
    else{
        res.status(400).json("wrong")
    }
});


/** page 404 */
replies.get("*", (req, res) => {
    res.status(404).send("with incorrect id - sets status to 404 and returns error key");
});

module.exports = replies;