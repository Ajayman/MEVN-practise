const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;

//public static path
const static_path = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//to set the view engines
app.set("view engine", "hbs");

//change directory name view to templatePath
app.set("views", templatePath);
hbs.registerPartials(partialsPath);
 app.use(express.static(static_path));

app.get("/", (req, res)=> {
    res.send("welcome to awalsoft technical channel")
})

app.get("/about", (req, res)=> {
    res.send("welcome to awalsoft technical channel")
})

app.get("/search", (req, res)=> {
    res.render("search", {
        hbs: "weather info"
    })
})

app.get("*", (req, res)=> {
    res.send("404 error !! Oops page not found")
})

app.listen(port, ()=> {
    console.log(`listening to the port at ${port}`)
})