//The main purpose of this video is that we can change the default name  
//of "views" by setting views using path
const express = require("express")
const path = require("path")
const app = express();
const port = 8000;


const staticPath = path.join(__dirname, "../public");
//Now since we have changed the name of views directory to templates,
//So VS code and HBS wouldn't be able to get the views. Therefore, we 
//will have to set the "views" as "templates" using the path of templates
const templatePath = path.join(__dirname, "../templates");

//We have to set the view engine and tell which view engine we are using
app.set("view engine", "hbs");//The spelling of this "view engine" must  
//be exactly same as it is written 
app.set("views", templatePath);//sets the "views" as templatePath


app.get("/", (req, res) =>{ //"/" represents home page
    res.render("index");
});
app.get("/about", (req, res) =>{ //"/about" represents about page
    res.render("about");
});
app.get("/contact", (req, res) =>{
    res.render("contact");
});

app.get("/", (req, res) =>{
    res.send("hello from the express server");
})
app.listen(port, () =>{
    console.log(`listening to the port ${port}`);
})