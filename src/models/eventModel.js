

const mongoose = require('moongoose')

const ObjectId = mongoose.Schema.Types.ObjectId


const eventSchema = new mongoose.Schema({


    eventName:{
        type:String,
        required:true

    },

    description:{

        type:String,
        required:true
    },

    eventDate:{
        type:Date,
        required:true
    },
    createdBy:{
        type:ObjectId,
        ref:'user',
        required:true

    },

    invitee:{  
        enum:[],  // this will be an array of object containing invitee and its time 
        required:true
    }

    

},{timeStamps:true})



module.exports  = mongoose.model('event',eventSchema)