//Events Module
//Node.js has a built in module called "Events"
//where you can create-, fire- and listen for- your own events
//Ex-1 -> Registering for the event to be fired only one time using once
//Ex-2 -> Create an event emitter instance and register a couple of 
//        callbacks
//Ex-3 -> Registering for the event with callback parameters 

const EventEmitter = require("events");//creating class EventEmitter
const event = new EventEmitter();//creating instance of the class

//1. & 2.
//this code makes the event to perform according to our needs and it 
//must be written before the event.emit line
event.on("saymyname", ()=>{//these functions tell us what do we want 
    console.log("You are BloodX");//from event.emit functions
});
event.on("saymyname", ()=>{
    console.log("You are BloodX");
});
event.on("saymyname", ()=>{
    console.log("You are BloodX");
});
//Multiple functions can be done using one Event only
event.emit("saymyname");//It will emit the event


//3.
event.on('checkpage', (sc, msg) =>{//function definition 
    console.log(`status code is ${sc} and the page is ${msg}`);
})
event.emit("checkpage", 200, "ok");//function call (only to remember)
//function call and definition terminology is used only to keep these
//functions in mind