//Creating Static Website using express.static built-in
//middleware
//Main point of Video-29 that for creating a website we would simply 
//write all HTML CSS JS in different folder(a) then to serve that 
//website we would simply create a different folder(b) then use 
//staticpath to get the path of a and using that we will serve that
//website from b

const path = require("path");
const express = require("express");
const app = express();//It means now app have all the 
// and properties of express
//Whenever we r using staticPath there are 2 kinds of paths-
//relative and absolute. We uses absolute normally...
//An absolute or full path points to the same location in a 
//file system regardless of the current working directory
console.log(__dirname);//__dirname & __filename are two 
//absolute functions and "__dirname" gives the current path
//from D: to last current file
console.log(path.join(__dirname, ".."))//this ".." would 
// take us one file or folder back in the current path
console.log(path.join(__dirname, "../V_29public"))
//"../V_29public" would take us from V_29src to V_29public


const staticPath = path.join(__dirname, "../V_29public");

//builtin middleware
app.use(express.static(staticPath))//The main lesson of V_29
//is that we only need to give this staticPath here then 
//that folder will be hosted automatically


// <------------ I M P O R T A N T -------------->
//So what we r actually doing is that to create a static 
//website we just created a different a V_29public folder,
//then in that folder we wrote all the HTML & CSS.
//Then, created a static path upto that folder and just used
//the app(express) for the website




app.get("/", (req, res) =>{
    res.send("hello from the express server BloodX")
})
app.get("/about", (req, res) =>{
    res.send("Hello from the about page")
})
 
//No need to create any server like Node js
app.listen(8000, () =>{
    console.log("Listening at the port 8000")
});