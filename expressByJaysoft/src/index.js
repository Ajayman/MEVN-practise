const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const hbs = require("hbs");
const requests = require("requests");
// relative or absolute
// __dirname is wrapper function
console.log(__dirname);

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// to set the view engines
app.set("view engine", "hbs");

// change directory name view to templatePath
app.set("views", templatePath);

hbs.registerPartials(partialsPath);

//builtin middleware
// app.use(express.static(staticPath));
//render through top to bottom
// template engine route
app.get("", (req,res)=> {
   res.render("index", {
    hbs: "thapa"
   }) 
})

app.get('/', (req, res)=> {
    res.send("<h1>welcome to my home page</h1>")
});
// app.get('/about', (req, res)=> {
//     res.render("about", {
//         hbs_about: "about ajay"
//     })
// })
app.get('/about',(req, res)=>{
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=bfcfd9f62c3a927e63996f6c0a459fea`)
    .on('data', function (chunk) {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        console.log(arrData);
        realTimeData = `${arrData[0].name} and the temp is ${arrData[0].main.temp}`
        // const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join("");
        // console.log(realTimeData);
        res.write(realTimeData);
    })
    .on('end', function (err) {
      if (err) return console.log('connection closed due to errors', err);
        res.end();
      console.log('end');
    });
})
app.get('/contact', (req, res)=> {
    res.render("contact", {
        hbs_contact: "contact ajay"
    })
})

app.get('*', (req, res) => {
    res.render("404", {
        errorcomment: "Opps the pages could not be found"
    });
})
// app.get("/about", (req, res)=> {
//     res.send("welcome to my about page");
// })

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

