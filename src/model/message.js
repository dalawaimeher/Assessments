

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

   const  messageSchema = new Schema({

    _id: {
        type: String
    },
    name:{
        type:String
    },
    message: {
        type: String
    }, 
    date: { type: String },
    uid:{type:}

    });

    const messageSchema = mongoose.model('messageSchema', message_collection, 'message_collection');

    module.exports={
        messageSchema
    }