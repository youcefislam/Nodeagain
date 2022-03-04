const fs = require("fs");
const path = require("path");

// create a folder
// fs.mkdir(path.join(__dirname,'/test'),{},err=>{
//     if (err) throw err;
//     console.log('Folder Created!');
// })

// create and write to file
fs.writeFile(
  path.join(__dirname, "/test/", "hello.txt"),
  "hello this is the hello file\n",
  (err) => {
    if (err) throw err;
    console.log("file written to ...");

    // add text to
    fs.appendFile(
      path.join(__dirname, "/test/", "hello.txt"),
      "Node is great",
      (err) => {
        if (err) throw err;
        console.log("file written to ...");

        // read from the file
        fs.readFile(
          path.join(__dirname, "/test/", "hello.txt"),
          "utf-8",
          (err, data) => {
            if (err) throw err;
            console.log(data);
            
            //rename the file
            fs.rename(
                path.join(__dirname, "/test/", "hello.txt"),
                path.join(__dirname, "/test/", "helloworld.txt"),
                (err, data) => {
                  if (err) throw err;
                  console.log('file renamed'); 
                }
              );
          }
        );
      }
    );
  }
);
