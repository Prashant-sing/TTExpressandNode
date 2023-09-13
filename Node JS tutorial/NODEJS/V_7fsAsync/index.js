const fs = require("fs");
//Asynchronous functions can't be used without using callback 
//functions
// fs.writeFile("read.txt","today is awesome day :)", (err) => {
//     console.log("file is created");
//     console.log(err);
// });

//we pass them a function as an arguement
//a callback- gets called when the task gets completed
//The callback has an arguement that tells you whether the 
//operation completed successfully or not
// fs.appendFile("read.txt", " Best time to purpose anyone",
// (err) =>{
//     console.log("task completed");
// });
fs.readFile("read.txt", "UTF-8",(err, data)=>{
    console.log(data);
    console.log(err);
});