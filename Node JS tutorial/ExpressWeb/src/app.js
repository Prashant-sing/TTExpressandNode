const express = require("express");
const path = require("path");
const hbs = require("hbs")
const app = express();
const port = process.env.PORT || 8000;//"process.env.PORT" provides us 
//the dynamic port no. which is used when we host our site

const template_path = (path.join(__dirname, "../Templates/views"))
const partials_path = (path.join(__dirname, "../Templates/partials"))
app.set('view engine', 'hbs');
app.set('views', template_path);//it will set the Templates as default folder instead of views
hbs.registerPartials(partials_path);

// PUBLIC STATIC PATH
const static_path = (path.join(__dirname, "../public"))
app.use(express.static(static_path));//to use the static content of
// public folder

// Now whatever we the changes we make in hbs files wouldn't be effective as 
// now vs code is running only app.js... So to run hbs files, we will have 
// to use command "nodemno src/app.js -e js,hbs"

// <------------------- ROUTING ----------------->
app.get("/", (req, res)=>{
    res.render('index');
})
app.get("/about", (req, res)=>{
    res.render('about');
})
app.get("/weather", (req, res)=>{
    res.render('weather');
})
app.get("*", (req, res)=>{
    res.render("404error", {
        ErrorMsg: 'Oops!! Page Not Found'
    });
})
app.listen(port, ()=>{
    console.log(`listening to the port:- ${port}`);
})