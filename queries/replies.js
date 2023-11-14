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
    console.log(item)
    const { reply_timestamp, thread_id, reply_user, reply_message, reply_pw } = item;
    
    try {
        const message = await db.one(`INSERT INTO replies (thread_id, reply_user, reply_message, reply_timestamp) 
            VALUES ($1, $2, $3, $4) RETURNING *`, 
            [thread_id, reply_user, reply_message, reply_timestamp]);
        console.log(`message is...`);
        console.log(message);
        const reply_pw_table = await db.one(`INSERT INTO reply_pw (reply_id, reply_pw) VALUES ($1, $2)`, [message.reply_id, reply_pw])
        return message;
    } catch(err){
        return err;
    }
}

/*
const updateMessage = async(id, body) => {
    const { user_name, time_stamp, thread_message, profile_pic, message_pic, reply_pw, reply_id } = item;
    try {
        const pw = await db.one(`SELECT * FROM reply_pw WHERE reply_id = ${reply_id}`);
        if (pw.reply_pw == reply_pw){
            try{
                const message = await db.any(`UPDATE forums SET time_stamp=$1, thread_message=$2, message_pic=$3, profile_pic=$4 WHERE reply_id = ${id} RETURNING *`,[time_stamp, thread_message, profile_pic, message_pic]);
                return message;

            }catch(err){
                return err;
            }
        } else{
            return {};
        }
    } catch(err){
        return err;
    }
}
*/
/*
const deleteOneMessage = async(id) => {
    //console.log(id);
    try {
        const message = await db.one(`DELETE FROM forums WHERE reply_id = ${id} RETURNING *`);
        return message;
    } catch(err){
        return err;
    }
}
*/

module.exports = {
    getReplies,
    createReply,
}