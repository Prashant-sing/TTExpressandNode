//<------------- Node js Streams -------------->
//Streams are objects that let you read data from a source
//or write data to a destination in continuous fashion.
//In Node.js, there are 4 types of streams
//1.Readable -> stream which is used for read operation
//2.Writable -> stream which is used for write operation
//3.Duplex -> stream which can be used for both read and
//            write operation
//4.Transform -> a type of duplex stream where the output is 
//             computed based on input 

//Each type of stream is an EventEmitter instance and throws 
//several events at different instance of times. Some 
//commonly used events are-
//1. data - This event is fired when there is data available 
//          to read
//2. end -  This event is fired when there is no more data
//          left to read
//3. error - This event is fired when there is any error while
//          receiving or writing data
//4. finish - This event is fired when all the data has been 
//           been flushed to underlying system

// TASK--
// 2nd way
// Reading from a stream
// Create a readable Stream
// Handle stream events --> data, end, and error
const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on("request", (req, res) =>{
    //This is older way of representing all data at once like first 
    //downloading files, then playing them (not streaming)
    // fs.readFile("input.txt", (err, data) => {
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });

    //Now we will use the 2nd way to stream data one by one
    // const rstream = fs.createReadStream("input.txt");
    // rstream.on("data", (chunkdata) =>{//It will present data untill data is 
    //     res.write(chunkdata);         //available
    // })
    // rstream.on("end", () =>{ //It will end the stream of data
    //     res.end();
    // })
    // rstream.on("error", (err) =>{
    //     console.log(err);
    //     res.write("file not available, 404");
    // })

    //3rd way 
    //stream.pipe() --> It is a method which is used to take a readable  
    //                  stream and connect it to the writable stream
    //2nd way can be replaced by just one line of code
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);//this function will write data at the same speed
    //as data would come but 2nd way was little slow in writing data
    //at the same speed as the data was coming
});
server.listen(8000, "127.0.0.1");