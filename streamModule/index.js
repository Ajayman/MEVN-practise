//2nd Way 
//Reasding from a stream
//Create a readable stream
// handle stream events - data,end and error

const fs = require("fs");
const  http = require("http");

const server = http.createServer();
server.on('request',(req, res) => {
// const rstream = fs.createReadStream("input.txt");
// rstream.on("data", (chunkdata) => {
//     res.write(chunkdata);
// });
// rstream.on('end', ()=> {
//     res.end();
// });
// rstream.on("error", (err) => {
//     console.log(err);
//     res.end("file not found");
// });

// 3rd way
const rstream = fs.createReadStream("input.txt");
rstream.pipe(res);
})
// server.on('request',(req, res) => {
//     fs.readFile("input.txt", (err,data)=> {
//         if(err) return console.error(err);
//         res.end(data.toString());
//     })
// })

server.listen(7000, "127.0.0.1");