const eventsEmmitter = require("events");
const http = require("http");

class Sales extends eventsEmmitter {
  constructor() {
    super();
  }
}

// we can set our own emitters by creatting a new instance of the events module
const myEmmiter = new Sales();

// Observers ----> this two functions basically work as a callback function
// they are triggered once the code reaches the trigger in this case the emit function on myEmitter
myEmmiter.on("new sale", () => {
  console.log("Customer name Jonnas");
});

myEmmiter.on("new sale", () => {
  console.log("Customer bought a car");
});

myEmmiter.on("new customer", (counter) => {
  console.log(`we have a new custommer in the store ${counter}`);
});

// this works as if we where clicking a button and then the call back fucntion is triggered once
// our code reaches the line below
myEmmiter.emit("new sale");
// we can pass argunmment in the trigger so that the observers can se them
myEmmiter.emit("new customer", 5);

//777777//////////////////////////////777777////////////////////////////
console.log("---------------------------------------------");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("This is a new server 1");
  console.log("server has started");
});

server.on("request", (req, res) => {
  console.log("server runningt listening on a second observer 2");
});

// In this case the emitter is triggered once the port 8000 is reached
server.listen("8000", "127.0.0.1", () => {
  console.log("Waiting for a request ...... 3");
});
