//We can create our own web server using Node js
//The http.createServer() method includes request and response
//parameters which is supplied by Node js

//The request object can be used to get information about the 
//current HTTP request. e.g. url, request header and data

//The request object can be used to send a response for a current
//HTTP request
//If the response from the HTTP server is supposed to be displayed
//as HTML, you should include an HTTP header with the correct content
//type
// const http = require("node:http");
import * as fs from 'node:fs/promises';
import http from 'node:http';
import url from 'node:url';
const server = http.createServer((req, res) =>{
    // console.log(req.url);
    if(req.url == "/"){// "/" represents the local host 8000
        res.end("Hello form the home sides");
    }
    else if(req.url == "/about"){
        res.end("Hello from the AboutUs sides");
    }
    else if(req.url == "/userapi"){
        fs.readFile("userapi.json","utf-8",
        (err,data) => {
            console.log(data);
            console.log(err);
            res.end(data);
        });
        res.end("Hello from the userapi sides");
    }
    else if(req.url == "/contact"){
        res.end("Hello from the contactUs sides");
        //above line can also be written as->
        //res.write("Hello from the contactUs sides");
        //res.end();
    }
    else{
        //at the network section of webserver, status for the error
        //page is 200(successful response). So to make the status as
        //error response, we will use writehead
        res.writeHead(404, {"Content-type" : "text/html"});//It will
        //make the content as html 
        // res.end("404 error page. Page is not loading");
        //Now to make the content type of webpage as http we will 
        //have to write all the code within http headers
        res.end("<h1>404 error page. Page is not loading</h1>");
    }
});
server.listen(8000, "127.0.0.1", () =>{
    console.log("listening to the port no. 8000")
});