const checkBody = (req, res, next) => {
    // checking if the req.body has a NAME
    if(req.body.user_name){
        console.log("name is okay")
        // (user_name, time_stamp, thread_message, profile_pic, message_pic)
        if(req.body.time_stamp){
            console.log("time_stamp is okay")
            if(req.body.thread_message){
                console.log("thread_message is okay")
                next();
            }else {
                // send the res and end the request
                res.status(400).json({ error: "thread_message is required!" })
            }
        }else {
            // send the res and end the request
            res.status(400).json({ error: "time_stamp is required!" })
        }
        next()
    } else {
        // send the res and end the request
        res.status(400).json({ error: "Name is required!" })
    }
}

const checkBoolean = (req, res, next) => {
    // check if we have an is favortie value
    if (req.body.is_favorite === true || req.body.is_favorite === false){
        // if we have value keep going
        next()
    } else{
        // if we dont send an error
        res.status(400).json({ error: "is_favorite must be a boolean value"})
    }
}

module.exports = {
    checkBody,
    checkBoolean
}