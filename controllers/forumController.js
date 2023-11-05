const express = require("express");
const forums = express.Router();

/** page 404 */
forums.get("*", (req, res) => {
    res.status(404).send("with incorrect id - sets status to 404 and returns error key");
});

module.exports = forums;