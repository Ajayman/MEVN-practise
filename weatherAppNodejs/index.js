const http = require("http");
const fs = require("fs");
var requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal)=> {
    let temperature = tempVal.replace("{%location%}", orgVal.location);
}
const server = http.createServer((req, res)=> {
    if(req.url == "/"){
        requests('https://api.openweathermap.org/data/2.5/weather?q=bhaktapur&appid=bfcfd9f62c3a927e63996f6c0a459fea')
.on('data', function (chunk) {
    const objdata = JSON.parse(chunk);
    const arrData = [objdata];
    // console.log(homeFile);
    const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join("");
    console.log(realTimeData);
    // res.write(realTimeData);
})
.on('end', function (err) {
  if (err) return console.log('connection closed due to errors', err);
    res.end();
  console.log('end');
});
    }
})

server.listen("8000", "127.0.0.1")