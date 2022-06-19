const fs = require("fs");

// create a folder name ajay
// fs.mkdirSync("ajay");

//create a file in it named bio.txt and data into it.
// fs.writeFileSync('ajay/bio.txt', "my mame is ajay kumar awal");

// add more data into the file at the end of the existing data.
// fs.appendFileSync('ajay/bio.txt','Please listen to me');


// Read the data without getting the buffer data at first.
// const data = fs.readFileSync("ajay/bio.txt");
// console.log(data);
// file encoding
// const data = fs.readFileSync("ajay/bio.txt", "utf8");
// console.log(data);

// Rename the file name to mybio.txt
// fs.renameSync("ajay/bio.txt", "ajay/mybio.txt")

// now delete both the file and the folder
// fs.unlinkSync("ajay/myBio.txt")

fs.rmdirSync("ajay");