const express = require("express");
const Student = require("../models/students")//Importing students.js 
//because our router.get or .post or .patch .... functions are using this
//Student Schema

// 1. Creating a new Router
const router = new express.Router();

// 2. Defining the Router
router.get("/thapa", (req, res)=>{
    res.send("Hello What is up bhailog!!")
});

// Since we r using router to export the data, we shall replace all 
// app.get    -> router.get
// app.post   -> router.delete
// app.patch  -> router.patch 
// app.delete -> router.delete

// <-------------- Creating New Students -------------->

// POST METHOD using Promises (without async await)
// //below "/students" is our root & will remain same in all the
// //API METHODS (POST, GET, ....)
// router.post("/students", (req, res)=>{ //post is a method of creating API.It created
//     //the database in compass
//     console.log(req.body);//req.body is giving us the data that we wrote 
//     //in the POSTMAN's body in JSON format
//     const user = new Student(req.body);//getting request's body from POSTMAN
//     user.save().then(()=>{//user.save() saves the data into the database and
//                           //returns a promise
//         //basically status would show us the correct status at POSTMAN
//         res.status(201).send(user);//status(201) is a status when something new 
//         //                           is being created
//     }).catch((err) =>{
//         res.status(400).send(err);// 400 -> error
//     })
// });


//  POST METHOD using ASYNC AWAIT
router.post("/students", async(req, res)=>{
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(err){
        res.status(400).send(err);
    }
})


//You DO NOT need express.json() and express.urlencoded() for GET Rquests
//or DELETE requests. We only need it for post and put req


// <--------- Reading the data of registered students --------->
router.get("/students", async(req, res)=>{
    try{
        const studentsData = await Student.find(); //like we 
        //used find() to get the data in command prompt and it 
        //returns promise
        res.send(studentsData);
    }catch(err){
        res.send(err);
    }
})

// <------ Getting the individual Student data using id ------>
router.get("/students/:id", async(req, res)=>{
    try{
        const _id = req.params.id;//getting the info from the 
                                  //URL that we ran at the chrome
        // console.log(req.params.name);
        // res.send(req.params.id);
        const studentData = await Student.findById(_id);//Normally it is 
        //written as findById({_id : _id}) but since both _id 
        //(key & values) are equal, therefore it can alse be written as
        //findById(_id);
        console.log(studentData);
        if(!studentData){
            return res.status(404).send();
        }
        else{
            return res.send(studentData);
        }
    }catch(err){
        res.status(500).send(err);//500 -> data is not available
        // at the server
    }
})

// // <------ Getting the individual Student data using name ------>
// router.get("/students/:name", async(req, res)=>{
//     try{
//         const names = req.params;
//         const studentData = await Student.findOne(names)
//         //Above 2 lines can be replaced by below 1 line of code. Both codes 
//         //are equal
//         // const studentData= await Student.find({name: new RegExp('^' + req.params.name + '$', "i")});
//         console.log(studentData);
//         if(!studentData){
//             return res.status(404).send();
//         }
//         else{
//             return res.send(studentData);
//         }
//     }catch(err){
//         res.status(500).send(err);
//     }
// })


// <----------- Updating the individual Student data using id ------------>
// For updation we have 2 methods -- PUT & PATCH
// PUT --> Suppose any line of code of a file causing error, then PUT will
//         change the entire file
// PATCH--> PATCH would only change that line not the entire file
router.patch("/students/:id", async(req, res)=>{
    try{
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body,{new: true} )//"{new: true}" is making POSTMAN to give us the updated
        //data at once, otherwise we had to send the request twice to get the
        //updated data.....
        res.send(updateStudents);
        console.log(updateStudents);
    }catch(err){
        res.status(404).send(updateStudents)
    }
})

// <------------ Updating the individual Student data using name ----------->
// use findOneAndUpdate() to update the data using name. Currently, it is not
// working...
// router.patch("/students/:name", async(req, res)=>{
//     try{
//         const names = req.params.name;
//         const updateStudents = await Student.findByOneAndUpdate(names, 
//             req.body,{new: true} )//"{new: true}" is making POSTMAN to give us the updated
//         //data at once, otherwise we had to send the request twice to get the
//         //updated data.....
//         res.send(updateStudents);
//         console.log(updateStudents);
//     }catch(err){
//         res.status(404).send(err)
//     }
// })

// <---------- Deleting the individual Student data using id ----------->
router.delete("/students/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);
        console.log(deleteStudent);
        if(!req.params.id){
            return res.status(400).send();
        }
        else{
            res.send(deleteStudent)
        }
    }catch(err){
        res.status(500).send(err);
    }
})

//For app.js to use router, we will have to exports router
module.exports = router;