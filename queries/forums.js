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

/*
const createMessage = async (item) => {
    console.log(item)
    if(!item.name || !item.artist ){
        return {error: "something is missing"};
    }
    try {
        const oneSong = await db.any(`INSERT INTO songs (user_name, time_stamp, thread_message, profile_pic, message_pic) 
            VALUES () RETURNING *`);
        return oneSong;
    } catch(err){
        return err;
    }
}
*/

/*
const updateOneSong = async(id, body) => {
    try {
        const song = await db.any(`UPDATE songs SET name='${body.name}', artist='${body.artist}', album='${body.album}', time='${body.time}', is_favorite=${body.is_favorite} WHERE id = ${id} RETURNING *`);
        return song;
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
}