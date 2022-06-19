// Event Module
/// Node.js has build in module, called Events.
// where you can create fire and listen for your own events.

// Eg1 - Registering for the event to be fired only one time using once.
// Eg2 - Create an event emitter instance an dregister a coupl eof callacks.Creawte
// Eg3 - Registering for the event with callback parameters

const EventEmitter = require("events");

const event = new EventEmitter();

// //Resitering Events
// event.on("sayMyName", ()=> {
//     console.log("Registered the sayMyName event");
// })
// event.on("sayMyName", ()=> {
//     console.log("Registered the sameEvent event");
// })

// //create emitter instance
// event.emit("sayMyName")
//accepting the parameter and printing the paramter
event.on('checkPage', (sc,msg) =>{
    console.log(`status code is ${sc} and the page is ${msg}`)
}) 
// registering the event with callback parameters
event.emit("checkPage", 200, "ok")