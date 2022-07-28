const eventModel = require('../models/eventModel')



const createEvent = async function(req,res){


    let data =req.body 


    let{eventName,description,eventDate,createdBy,invite} =data


    // invite is an array of an object 



    let dataCreation ={
        eventName:eventName,
        decription:description,
        eventDate:eventDate,
        createdBy:createdBy,
        invite:invite
    }

    let createdData = await eventModel.create(dataCreation)
}


const inviteEvent = async function (req,res){


}

const listEvents =async function(req,res){

}

const updateEvent =async function(req,res){

}

const deleteEvent = async function(req,res){


}


module.exports ={createEvent,inviteEvent,listEvents,updateEvent,deleteEvent}