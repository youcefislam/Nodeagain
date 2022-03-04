const http = require("http");

// create sever object
http
  .createServer((req, res) => {
    //Write a response
    res.write("Hello World!");
    res.end();
  })
  .listen(5600, () => console.log("Server is running!..."));
