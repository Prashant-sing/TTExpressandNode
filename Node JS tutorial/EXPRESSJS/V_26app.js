// Express JS is a Node js framework. It is the most popular
// framework as of now
// OR
// Express JS is a web application framework that provides 
// with a simple API to build websites, webpages and 
// backends
// It is faster in comparison to Node JS 

//Methods that are used in APIs are--
// post - create,    c
// get -  read,      r
// put -  update,    u
// delete-delete     d
const express = require("express")
const app = express();//It means now app have all the 
// and properties of express


// app.get(route, callback) //get is used to get the data 
// from the server. route represents the route for the 
// website, like "/" represents the homepage of website
// callback is used to show whatever we want at the website
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





//The callback function has 2 parameters-- request(req) and
//response(res). The request object(req) represents the http
//request and has properties for the request query string,
//parameters, body, HTTP headers
//Similarly, the response object(res) represents the 
//HTTP response that the Express app send when it receives
//HTTP request