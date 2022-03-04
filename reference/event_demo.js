const EventEmitter = require("events");

// Create class
class MyEmitter extends EventEmitter {}

// init emitter
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on("event", () => console.log("Event Fire!"));

// init event
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
