const express = require("express");
const app = express();
// app.get(route, callback)
app.get("/", (req, res) => {
    res.send("Hello from the express")
})

app.get("/about", (req, res) => {
    res.send("Hello from the about")
})

app.listen(8000, ()=> {
    console.log("Listening the port at 8000")
})

// The callback funciton has 2 parametes, request(req) and response(res)
// the request object represents the HTTPO request and has properties for
//  the the request query String, parameters, bopdy, HTTP Headers, etx

// similarly, the response object represents the HTTP response that the express app sends when 
// it receives an HTTP request

//API
// get -read
// post  - create
// put - update
// delete - delete