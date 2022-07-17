const express = require("express");
require("../src/db/conn");
const MensRanking = require("../src/models/mens");
const router = require("../src/routers/mens")
const app = express();

// while hosting live we cant write port number process.env.port create a dynamic port number and 3000 for local port number
const port = process.env.PORT || 3000;
//for json data to be accepted by express we should write following code
app.use(express.json());

app.get('title');
// app.get("/", (req, res)=> {
//     res.send("Hello from men 100")
// })

app.use(router);

app.listen(port, ()=> {
    console.log(`connection is live at port no. ${port}`)
})