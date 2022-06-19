const fs = require("fs");
const bioData = {
    name: "vinod", 
    age: 26,
    channel: "ajaysoft"
}
const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json", jsonData, (err) => {
    console.log("done");
})

fs.readFile("json1.json", "utf-8", (err,data) => {
    const orgData = JSON.parse(data);
    console.log(data.name);
    console.log(orgData.name);
})