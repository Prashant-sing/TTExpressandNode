//The main purpose of this video is that we can change the default name  
//of "views" by setting views using path
const express = require("express")
const app = express();
const path = require("path")
const hbs = require("hbs");//To use the partials we have to 
//require the template engines(HBS,pug,EJS) whatever we are using
const port = 8000;


const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const paritalsPath = path.join(__dirname, "../templates/partials")

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(paritalsPath);//registering partials in HBS

app.get("/", (req, res) =>{ //"/" represents home page
    res.render("index");
});
app.get("/about", (req, res) =>{ //"/about" represents about page
    res.render("about");
});

//Suppose if user moves inside any folder but it does not exist
//in that case we would want to show a different error to user 
//regarding that folder in which the user is---

app.get("/about/*", (req, res) =>{
    res.render("404", {
        errorcomment:"OOPs this folder doesn't exist inside about",
    })
})


//"*" represents all the pages which are not defined here or all
//the undefined pages
app.get("*", (req, res) =>{ //"*" represents the undefined pages
    res.render("404", {  //Means if we try to access any undefined
        errorcomment: "Page does not exist",//page, it will show 
    });                  //us 404 error.
});
app.get("/", (req, res) =>{
    res.send("hello from the express server");
})
app.listen(port, () =>{
    console.log(`listening to the port ${port}`);
})