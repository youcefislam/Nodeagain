const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:8000/hello.html?id=100&status=active"
);

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host(root domain)
console.log(myUrl.host);
// Hostname (does not get port)
console.log(myUrl.hostname);

// pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);
// add params
myUrl.searchParams.append("name", "Youcef");
console.log(myUrl.searchParams);
