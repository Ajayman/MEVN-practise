const fs = require("fs");
//make folder
// fs.mkdir('ajay', (err) => {
//     console.log("folder created")
// })
//create file bio.txt with text
// fs.writeFile("./ajay/bio.txt", "my name is Ajay", (err) => {
// console.log('files created');
// })

//append text in bio.txt
// fs.appendFile('./ajay/bio.txt', 'please like and share my page', (err) => {
//     console.log("file appended")
// })

//read file bio.txt 
// fs.readFile('./ajay/bio.txt', 'utf-8', (err, data)=> {
//     console.log(data);
// })

//rename bio.txt to myBio.txt
// fs.rename("./ajay/bio.txt", "./ajay/myBio.txt", (err) => {
//     console.log("rename done");
// })


//delete mybio.txt
// fs.unlink("./ajay/mybio.txt", (err)=> {
//     console.log("file deleted");
// }) 

// delete folder ajay
fs.rmdir('./ajay', (err)=> {
    console.log("folder deleted");
})