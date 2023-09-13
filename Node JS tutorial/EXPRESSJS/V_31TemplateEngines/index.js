//Pug, Mustache, EJS & HBS are some template engines of EXPRESSJS to get 
//the dynamic website. They are like HTML but they have extra capabilities
//like dynamic data can be added in template engines...
//We use template engines to add dynamic data in Express JS because dynamic 
//data can't be added in pure HTML.

//Template engines need "views" directory by default. Althought it can be 
//changed

//We have installed hbs(template engine) using "npm install hbs"
//in the main EXPRESSJS folder 
//To use hbs we will have to create "views" folder in the main
//EXPRESSJS folder 
const express = require("express")
const path = require("path")
const app = express();
const port = 8000;


const staticPath = path.join(__dirname, "../public");

//We have to set the view engine and tell which view engine we are using
app.set("view engine", "hbs");//The spelling of this "view engine" must  
//be exactly same as it is written 

// builtin middleware -> express.static(path)
// To server the static website, we use builtin middleware
// app.use(express.static(staticPath));//It is asking for the current path.
// Once it got the correct path, then it will 
//start serving the website
app.get("/", (req, res) =>{
    res.render("index");//Whenever u r working with template engines u 
    //must "render" instead of "send".
});

app.get("/", (req, res) =>{
    res.send("hello from the express server");
})
app.listen(port, () =>{
    console.log(`listening to the port ${port}`);
})