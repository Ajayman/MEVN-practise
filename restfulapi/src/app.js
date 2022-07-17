const express = require("express");
require("./db/conn");
const Student = require("./models/students")
const studentRouter = require("./routers/student")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// we need to register router
app.use(studentRouter);

app.get("/", (req,res)=> {
    res.send("hello");
})

// app.post("/students", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(()=> {
//         res.status(201).send(user);
//     }).catch((e)=> {
//         res.status(400).send(e);
//     })

// })

app.listen(port, ()=> {
    console.log(`connection is setup at ${port}`);
})


// You dont need express.json() and express.urlencoded()
// for get Requests or delete requests. We only need it for post and put req.PORT

// express.json() is a method inbuilt in express to recognisze the incoming 
// Request Object as a JSON object. This method is called as a middleware.JSON
// In your application using the code app.use(express.json())