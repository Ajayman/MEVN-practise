const express = require("express");
const app = express();
const port = 3000;


app.get('/', (req, res)=> {
    res.send("<h1>welcome to my home page</h1>")
});

app.get("/about", (req, res)=> {
    res.send("welcome to my about page");
})

app.get("/temp", (req, res) => {
    res.send([{
        id: 1,
        name: "Ajay"
    }])
})

// the methods are identical when an object or array is passed. but  res.json() will aslo convert not-objects,
// such as null and undefined, which are not valid JSON.


app.listen(port, ()=> {
    console.log(`listening to the port no. ${port}`);        //template literals writing js code in between ``
})

