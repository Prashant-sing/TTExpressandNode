const express = require("express")
require("./database/connection");//Connecting connection.js and student.js to the
const Student = require("./models/students");//app.js as it is the main folder
const StudentRouter = require("./Router/student")
const app = express();
const port = process.env.PORT || 8000;//It will make sure that we always 
//get a proper port no., no matter wherever we host the website

//express.json is a method inbuilt in express to recognize the incoming
//request object as a json object. This method is called as a middleware
//in your application using the code: app.use(express.json());
app.use(express.json());//It is recognizing the incoming request and JSON 
//data from POSTMAN


// <-------------- EXPRESS ROUTER --------------->
// With the help of this we will use this all create, read, delete and update
// operations and wouldn't need them to be present here. We shall move them 
// to a different file...

// 3. Registring our Router
app.use(StudentRouter);


// app.get("/", (req, res) =>{
//     res.send("hello from the my side BloodX")
// }) 






app.listen(port, () =>{
    console.log(`connection is setup at the ${port}`)
})