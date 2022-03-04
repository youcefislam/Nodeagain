const os = require("os");

// platform
console.log(os.platform());

// CPU arch
console.log(os.arch());

// CPU core info
console.log(os.cpus());

// Free Memory
console.log(os.freemem());

// Total Memory
console.log(os.totalmem());

// Home Directory
console.log(os.homedir());

// Up Time
console.log(os.uptime() / 3600);
