const db = require("../db/dbConfig.js");

const getReplies = async (id) => {
    try{
        const messages = await db.any(`SELECT * FROM replies WHERE thread_id = ${id}`);
        return messages;
    } catch(err) {
        return err;
    }
}

const createReply = async (item) => {
    const { reply_timestamp, thread_id, reply_user, reply_message, reply_pw } = item;
    
    try {
        const message = await db.one(`INSERT INTO replies (thread_id, reply_user, reply_message, reply_timestamp) 
            VALUES ($1, $2, $3, $4) RETURNING *`, 
            [thread_id, reply_user, reply_message, reply_timestamp]);

        const reply_pw_table = await db.one(`INSERT INTO reply_pw (reply_id, reply_pw) VALUES ($1, $2)`, [message.reply_id, reply_pw])
        return message;
    } catch(err){
        return err;
    }
}

const updateReply = async(id, body) => {
    const { reply_timestamp, reply_message, reply_pw } = body;
    try {
        const pw = await db.one(`SELECT * FROM reply_pw WHERE reply_id = ${id}`);

        if (pw.reply_pw == reply_pw){
            try{
                const message = await db.any(`UPDATE replies SET reply_timestamp=$1, reply_message=$2 WHERE reply_id = ${id} RETURNING *`,[reply_timestamp, reply_message]);
                return message;
            }catch(err){
                return err;
            }
        } else{
            return {error: "wrong pw"};
        }
    } catch(err){
        console.log(err);
        return err;
    }
}


const deleteOneReply = async(id, body) => {
    const {reply_pw} = body;

    try {
        const pw = await db.one(`SELECT * FROM reply_pw WHERE reply_id = ${id}`);

        if (pw.reply_pw == reply_pw){
            try{
                console.log("entered")
                const message = await db.one(`DELETE FROM replies WHERE reply_id = ${id} RETURNING *`);
                return message;
            } catch(err){
                console.log(err)
                return err;
            }
        }
        else{
            return {error: "wrong pw"};
        }
    } catch(err){
        console.log(err)
        return err;
    }
}


module.exports = {
    getReplies,
    createReply,
    updateReply,
    deleteOneReply,
}