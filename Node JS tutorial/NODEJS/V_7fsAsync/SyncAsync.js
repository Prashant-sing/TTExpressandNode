const fs = require("fs");
// We should not use Sync functions as they block the user, means
// no other command can get executed until the sync functions get 
// executed
// const data = fs.readFileSync("read.txt", "utf-8");
// console.log(data);


// Asynchronous functions don't block the user, they process the
// request as they come. So, we must use Asynchronous functions
// as much as possible
fs.readFile("read.txt", "utf-8", (err, data) =>{
    console.log(data);
});
console.log("hello");