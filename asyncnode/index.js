const fs = require("fs");

// create file using asynchronous way
// fs.writeFile("read.txt", "today is happy day :)", (err) => 
// {
//     console.log("file is created");
//     console.log(err);
// })

// we pass them a function as an argument - a callback - 
// that gets called when that task completes.
// the callback has an argument that tells yuou whether
// the operations completed successfully.
// Now we need to say what to do when fs.writeFile 
// has completed(even if it's nothing), and start 
// checking for errors.

fs.readFile("read.txt","UTF8", (err, data) => {
    console.log(data);
})