//This video would tell us how we can serve websites using 
//express js easily
const express = require("express")
const app = express();
const path = require("path");
const port = 8000;


const staticPath = path.join(__dirname, "../public");
// builtin middleware -> express.static(path)
// To server the static website, we use builtin middleware
app.use(express.static(staticPath));//It is asking for the current path.
// Once it got the correct path, then it will 
//start serving the website

app.get("/", (req, res) =>{
    res.send("hello from the express server");
})
app.listen(port, () =>{
    console.log(`listening to the port ${port}`);
})