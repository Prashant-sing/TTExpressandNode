//https://api.openweathermap.org/data/2.5/weather?q=Etawah&appid=b36afeca80c6938a26eafdd7d7ecdae2
//°
const http = require("http");
const fs = require("fs");
var requests = require('requests');
const homeFile = fs.readFile("home.html", "utf-8", (err, data) =>{
    // console.log(data);
});
const replaceVal = (tempVal, orgVal) =>{
    let Temp = tempVal.replace("{%tempval%}", orgVal.main.temp);
    Temp = tempVal.replace("{%tempmin%}", orgVal.main.temp_min);
    Temp = tempVal.replace("{%tempmax%}", orgVal.main.temp_max);
    Temp = tempVal.replace("{%location%}", orgVal.name);
    Temp = tempVal.replace("{%country%}", orgVal.sys.country);
    return Temp;
};
const server = http.createServer((req, res) =>{
    if(req.url == "/"){//"/" represents home page
        requests("https://api.openweathermap.org/data/2.5/weather?q=Etawah&appid=b36afeca80c6938a26eafdd7d7ecdae2")
        .on("data",  (chunk) =>{
            const objData = JSON.parse(chunk);
            const arrData = [objData];//Array of Objects
            const temperature = arrData[0].main.temp;
            console.log((temperature-273));
            const realTimeData = arrData.map((val)=> replaceVal(homeFile, val));
            //below code replaced by one line
            // const realTimeData = arrData.map((val)=>{
            //     replaceVal(homeFile, val);
            // });
            // res.write(realTimeData);
            console.log(realTimeData);
        })
        .on("end",  (err) =>{
            if (err) return console.log('connection closed due to errors', err);
            res.end();
            // console.log('end');
        });
    }
    else{
        res.end("File not found");
    }
})
server.listen(8000, "127.0.0.1");