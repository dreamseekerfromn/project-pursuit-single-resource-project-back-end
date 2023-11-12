const db = require("../db/dbConfig.js");

const getAllMessages = async () => {
    try {
        const allMessages = await db.any("SELECT * FROM forums");
        return allMessages;
    } catch(err) {
        return err;
    }
}

const getOneMessage = async (id) => {
    try{
        const message = await db.any(`SELECT * FROM forums WHERE id = ${id}`);
        return message;
    } catch(err) {
        return err;
    }
}

const createMessage = async (item) => {
    console.log("receive")
    console.log(item)
    const { user_name, time_stamp, thread_message, profile_pic, message_pic } = item;
    if(!user_name || !time_stamp || !thread_message){
        return {error: "something is missing"};
    }
    try {
        const message = await db.one(`INSERT INTO forums (user_name, time_stamp, thread_message, profile_pic, message_pic) 
            VALUES ($1, $2, $3, $4, $5) RETURNING *`, [user_name, time_stamp, thread_message, profile_pic, message_pic]);
        return message;
    } catch(err){
        return err;
    }
}

/*
const updateMessage = async(id, body) => {
    const { user_name, time_stamp, thread_message, profile_pic, message_pic } = item;
    try {
        const message = await db.any(`UPDATE forums SET time_stamp=$1, thread_message=$2, message_pic=$3, profile_pic=$4 WHERE id = ${id} RETURNING *`,[time_stamp, thread_message, profile_pic, message_pic]);
        return message;
    } catch(err){
        return err;
    }
}
*/

const deleteOneMessage = async(id) => {
    //console.log(id);
    try {
        const message = await db.one(`DELETE FROM forums WHERE id = ${id} RETURNING *`);
        return message;
    } catch(err){
        return err;
    }
}

module.exports = {
    getAllMessages,
    getOneMessage,
    deleteOneMessage,
    createMessage,
}