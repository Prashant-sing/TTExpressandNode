//CHALLENGE TIME
//1. Create a folder named Thapa
//2. Create a file named bio.txt and data into it
//3. Add more data into the file at the end of existing data
//4. Read the data without getting the buffer data at first
//   To directly read the file data without any buffer, we will 
//   have to encode the files
//5. Rename the file name to mybio.txt
//6. Now delete both the file and folder
const fs = require("fs");
// fs.mkdir("thapa", (err)=>{
//     console.log("folder created");
// });

// '.' represents the current file at which we r working
// fs.writeFile("./thapa/bio.txt", "This is BloodX", (err)=>{
//     console.log("files created");
// });
// fs.appendFile("./thapa/bio.txt", " hello everyone", (err) =>{
//     console.log("File's data appended")
// });

// fs.readFile("./thapa/bio.txt", "utf-8", (err, data) =>{
//     console.log(data);
//     console.log(err);
// });
// fs.rename("./thapa/bio.txt", "./thapa/mybio.txt", (err)=>{
//     console.log("rename done");
//     console.log(err);
// });
// fs.unlink("./thapa/mybio.txt", (err)=>{
//     console.log("file deleted");
//     console.log(err);
// });
fs.rmdir("./thapa",(err)=>{
    console.log("folder deleted");
});