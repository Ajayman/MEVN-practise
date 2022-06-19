// const { Http2ServerRequest } = require("http2")

// The HttpServerRequest.createServer() method includes request and response parameters which is supplied by Node.js

// the request can be used to get information about the current HTTP request eg. url, request header, and data.
 
// the response object can be used to send a response for a current HTTP request.

//  If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with 
// the correct content type


const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url == "/"){
    res.end("Hello bro")
    }
    else if(req.url == "/about"){
        res.end("Hello from about us page")
    }
    else if(req.url == "/contact"){
        req.setHeader("Content-type", "application/json")
        res.end("Hello from contact us page")
    }
    else if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/userApi/userapi.json`, "utf-8", (err, data) => {
            console.log(data);
            res.end(data);
        })
    }
    else{
        res.writeHead(404, {"content-type": "text/html"});
        res.end("<h1> 404 error page  does not exit </h1>")
    }
});

server.listen(8000,"127.0.0.1", () => {
    console.log("listening to the port no 80000");
})