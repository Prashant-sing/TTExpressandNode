// www.thapa.com - welcome to my homepage
// /about - welcome to my about page
// /contact - welcome to my contact page
// /temp - welcome to my temp page
const express = require("express");
const app = express();//Now app have all the properties
// and methods of express
const port = 3000;
app.get("/", (req, res) =>{
    //res.write is used to send mutliple http requests but 
    //when we send these kind of requests page kept on 
    //loading therefore we also used res.send to stop that 
    //loading of page
    res.write("<h1>welcome to my homepage</h1>")//This h1 is
    //html. So we r sending html basically
    res.write("<h1>welcome to my again homepage</h1>")
    res.send();
}); 
app.get("/about", (req, res) =>{
    res.status(200).send("welcome to my aboutpage")
}); 
app.get("/contact", (req, res) =>{
    res.send("welcome to my contactpage")
}); 
// app.get("/temp", (req, res) =>{
//     res.send([
//         {
//         id: 1, //Here we simply send JSobject as response 
//         naam: "BloodX"//and later browser converts it into
//         //the JSON format. Hence we can send JSON data 
//         },   
//         {
//         id: 1, 
//         naam: "BloodX"
        
//         },   
//         {
//         id: 1, 
//         naam: "BloodX"
        
//         },   
//         {
//         id: 1, 
//         naam: "BloodX"
        
//         }  //Hence we can also send multiple array objects
//         //and instead of res.send we can use res.json 
//     ]);
// }); 
app.get("/temp", (req, res) =>{
    res.json([
        {
        id: 1, //Here we simply send JSobject as response 
        naam: "BloodX"//and later browser converts it into
        //the JSON format. Hence we can send JSON data 
        },   
        {
        id: 1, 
        naam: "BloodX"
        
        },   
        {
        id: 1, 
        naam: "BloodX"
        
        },   
        {
        id: 1, 
        naam: "BloodX"
        
        }  //Hence we can also send multiple array objects 
    ]);
}); 
//The methods-- res.send and res.json are identical,
//main difference btw res.send and res.json is that res.json
//also converts non objects like null & undefined into json
//yet they are not valid Json. But res.send converts only 
//objects into JSON(doesn't convert non objects)
 
app.listen(port, () =>{
    console.log(`listening to the port ${port}`);
});