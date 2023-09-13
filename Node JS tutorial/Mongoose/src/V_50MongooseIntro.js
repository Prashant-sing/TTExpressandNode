//Mongoose is basically a framework of MongoDB to connect 
//ExpressJS and NodeJS to local database(MongoDB)

const mongoose = require("mongoose");
const validator = require("validator");


//For connecting database, always give the correct path and 
//instead of using "mongodb://localhost:27017/" as connection
//string, we used "mongodb://0.0.0.0:27017/"
mongoose.connect("mongodb://0.0.0.0:27017/Babu"//it returns a promise
    ,{useNewUrlParser: true,//
      useUnifiedTopology: true,
    //   useCreateIndex: true //useCreateIndex is not supported now. So, it is better not 
                              //to use this...
     }
).then( ()=> console.log("connection successfull"))
.catch((err)=> console.log(err))


//schema 
//A mongoose schema defines the structure of the document,
//default values, validators, etc....
const playlistSchema = new mongoose.Schema({
    name:{
        //<--------------------- BUILT-IN VALIDATORS ---------------------->

        type: String,//means name given must be in the string format
        required: true,//required means that this field must be present in the documents
        unique: true,//means the names must be unique. Although, unique is working as a 
        //validator but it is not the validator
        lowercase: true,//means character must be in lowercase form 
        // uppercase: true,//means character must be in uppercase form
        trim: true,//It is used to remove the extra space
        minLength: [2,"Minimum 2 characters needed for a name bsdk"],//we added our own 
        //customized error
        maxLength:30

        //It means that names given to the document, must satisfy all the above property
    },                
    ctype : {
        type: String,
        required: true,
        lowercase: true,
        enum: ["frontend", "backend", "database"]//enum makes sure that ctype of any 
        //document must be one of these three not out of them...
    },
    videos: {
        type: Number,
        required: true,



        //   <----------------------- CUSTOM VALIDATORS ------------------------->
        //We can create custom validators using validate()
        validate(value){
            if(value < 0){
                throw new Error("Videos count cannot be negative");
            }
        }

        //Above code can also be written like this-->
        // validate:{
        //     validator:function(value){
        //         return value.length < 0;
        //     },
        //     message: "Videos count cannot be negative"
        // }

    },
    author: String,

    //  <---------------------- CUSTOM AND NPM VALIDATOR -------------------->
    email:{
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){//"isEmail" is a NPM VALIDATOR
                throw new Error("Email is inValid");
            }
        }
    },
    active: Boolean,
    date:{
        type:Date,
        default: Date.now
    }
})

// A mongoose model is a wrapper on the mongoose schema
// A mongoose schema defines the structure of the document,
// default values, validators, etc... whereas a Mongoose model
// provides an interface to the database for creating, querying
// updating, deleting records, etc....

// <-------------C R E A T I N G   C O L L E C T I O N--------------->
const Playlist = new mongoose.model("Playlist",playlistSchema)
//Whenever we write collection name(here it is Playlist), it 
//must be SINGULAR and MUST START WITH A CAPITAL LETTER because
//it is working like a class here


// <---------------C R E A T I N G   D O C U M E N T S--------------->

//Creating or Inserting document without async await
// const reactPlaylist = new Playlist({//document is being created
//     name : "React JS",//asynchronously... which would take 
//     ctype : "Front End",//time
//     videos: 80,
//     author: "BloodX",
//     active: true
// })
// reactPlaylist.save();//save function returns promise

//Now we will create document using async await
const createDocument = async() => {
    try{
        const jsPlaylist = new Playlist({
            name : "JhansuScripts..",
            ctype: "Database",
            // ctype : "UIUX",//Now this will give error as it does not matches the enum  
            // of schema
            videos: 5,
            author: "BloodX",
            email: "Taklu123@te",
            active: true
        })
        const mongoPlaylist = new Playlist({
            name : "MongoDB",
            ctype : "Database",
            videos: 10,
            author: "BloodX",
            active: true
        })
        const mongoosePlaylist = new Playlist({
            name : "Mongoose",
            ctype : "Database",
            videos: 5,
            author: "BloodX",
            active: true
        })
        const ExpressPlaylist = new Playlist({
            name : "Express",
            ctype : "Back End",
            videos: 20,
            author: "BloodX",
            active: true
        })
        // const result = await reactPlaylist.save();//save is used to insert single
        // console.log(result);//document only...

        //insertMany() is used to insert many documents together
        // const result = await Playlist.insertMany([jsPlaylist, mongoPlaylist, mongoosePlaylist, ExpressPlaylist])//passing documents as an array object
        // // console.log(result);

        const result = await Playlist.insertMany([jsPlaylist]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
createDocument();


//  <------------------R E A D I N G    D O C U M E N T----------------->
const getDocument = async()=>{
    try{
    //     const result = await Playlist.find();//using the find function like we used
    // // in command prompt 

    // const result = await Playlist.find({ctype:"Front End"});//Now it will give us
    // // the documents which have the coursetype: "Front End"

    // const result = await Playlist.find({ctype:"Front End"}).select({name:1}).limit(1);
    // // Now above function will give us only the names of documents whose ctype is
    // // Front End


    // <-----------------COMPARISON OPERATORS------------------>
    // $eq -> Matches values that are equal to a specified value.
    // $gt -> Matches values that are greater than a specified value.
    // $gte-> Matches values that are greater than or equal to a specified value.
    // $in -> Matches any of the values specified in an array.
    // $lt -> Matches values that are less than a specified value.
    // $lte-> Matches values that are less than or equal to a specified value.
    // $ne -> Matches all values that are not equal to a specified value.
    // $nin-> Matches none of the values specified in an array.

    // const result = await Playlist
    // .find({videos: {$gt: 50}})//$gt represents greater than operator
    // .select({name:1})
    // .limit(1);
    // console.log(result)//means now it will show us the name of documents having 
    // videos greter than 50

    // const result = await Playlist
    // .find({ctype: "Back End"})//It will only give us the documents having ctype
    // .select({name: 1})        //as Back End
    // console.log(result);

    // const result = await Playlist
    // .find({ctype: {$in: ["Back End", "Database"]}})//Now it will give us all the 
    // .select({name: 1});//document having ctype "Back End"&"Database"
    // console.log(result);

    // const result = await Playlist
    // .find({ctype: {$nin: ["Back End", "Database"]}})//Now it will give us all 
    // .select({name: 1});//the document not having ctype "Back End"&"Database"
    // console.log(result);


    // <------------------LOGICAL OPERATOR------------------->
    // $and -> Joins query clauses with a logical AND returns all documents that
    // match the conditions of both clauses.
    // $not -> Inverts the effect of a query expression and returns documents
    // that do not match the query expression.
    // $nor -> Joins query clauses with a logical NOR returns all documents that
    // fail to match both clauses.
    // $or  -> Joins query clauses with a logical OR returns all documents that 
    // match the conditions of either clause.
    // const result = await Playlist
    // .find({$nor: [{ctype: "Back End"}, {name: "Node JS"}]})//Now it will give us all 
    // .select({name: 1});//the document not having ctype "Back End"&"Database"
    // console.log(result);


    //  <----------------Sorting and Count Query Methods----------------->
    //  "countDocuments()" and "sort({field})" are used to count and sort documents

    // const result = await Playlist
    // .find({author: "BloodX"}) 
    // .select({name: 1})
    // .countDocuments();
    // console.log(result);


    const result = await Playlist
    .find({author: "BloodX"}) 
    .select({name: 1})
    .sort({name: -1});
    console.log(result);
     
    }catch(err){
        console.log(err);
    }
}
// getDocument();


//  <---------------- UPDATING THE DOCUMENTS ---------------->
//  update() has been deprecated. So now we use updateOne() and updateMany()
const updateDocument = async(_id) =>{
    try{
        // const result = await Playlist.updateOne({_id},{$set:{name: "php"}});
        // console.log(result);//It will only show us that updation has been done
        // //will not show the updation

        const result = await Playlist.findByIdAndUpdate({_id},{
            $set:{name: "PHP"}
        }, {
            new: true,  //new will give us the updated content at console instead of 
                        //original or previous content
            useFindAndModify: false
        } );
        console.log(result);
    }catch(err){
        console.log(err)
    }
}
// updateDocument("64b51c8fc83e9c776b0bc0c0");


//  <--------------------- DELETING THE DOCUMENT ---------------------->
//  deleteOne for deleting one document and deleteMany for deleting Many document
//  "deleteOne" & "deleteMany" shows only the amount of documents that has been deleted
//  not the document which has been deleted
const deleteDocument = async(_id) =>{
    try{
        // const result = await Playlist.deleteMany({name});
        // console.log(result);
 
        const result = await Playlist.findByIdAndDelete({_id});//"findByIdAndDelete()" 
        console.log(result);//shows us the document which has been deleted...
    }catch(err){
        console.log(err);
    }
}
// deleteDocument("64b62e3cfe0c280bac67f828");