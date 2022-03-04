const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
  //     if (err) throw err;

  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.end(data);
  //   });
  // }
  // if (req.url === "/api/users") {
  //   const users = [
  //     { name: "Hamaidi youcef", age: 40 },
  //     { name: "Hamaidi islam", age: 32 },
  //   ];
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(users));
  // }

  // Build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  //extension of file
  let extension = path.extname(filePath);
  //Initial content type
  let contentType = "text/html";

  // check ext and set content type
  switch (extension) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENDENT") {
        //page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            if (err) throw err;
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf-8");
          }
        );
      } else {
        // some server error
        res.writeHead(500);
        res.end(`Server Error ${err.code}`);
      }
    } else {
      //success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

const PORT = process.env.PORT || 5600;
server.listen(PORT, () => console.log(`Server is listening on ${PORT}...`));
