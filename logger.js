const events = require("events");
const uuid = require("uuid");

class Logger extends events {
  log(msg) {
    //call event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;
// const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => console.log("called Listener", data));

logger.log("first call");
logger.log("second call");
logger.log("third call");
