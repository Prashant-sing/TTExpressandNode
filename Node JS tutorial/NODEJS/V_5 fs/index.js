// CORE MODULES
// console.log("BloodX");

// As soon as you are writing code, don't forget to comment them 
// out
// requiring the module
// const fs = require("fs");
//Now it will create read.txt if it does not exist and if 
//it exists then it will overwrite the content of read.txt
// fs.writeFileSync("read.txt", "Welcome to my channel")

// fs.writeFileSync("read.txt","BloodX")//It will overwrite 
//the read.txt file

//To add any data in the given data(no overwriting)
// fs.appendFileSync("read.txt"," hello, how are you?")
// fs.appendFileSync("read.txt"," I am fine")

//Reading the files
// const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);
//Node.js includes an additional datatype called Buffer
//(not available in browser's javascript)
//Buffer is mainly used to store binary data,
//while reading from the file or receiving packets over
//the network, we always get buffer data.
{/* <Buffer 42 6c 6f 6f 64 58 20 68 65 6c 6c 6f 2c 20 68 6f 77 20 61 72 65 20 79 6f 75 3f 20 49 20 61 6d 20 66 69 6e 65> */}
//To remove this buffer data, we will convert this data to
//string
// org_data = buf_data.toString();
// console.log(org_data);

//To rename the file
// fs.renameSync("read.txt", "readwrite.txt");//converted the
//file from read.txt -> readwrite.txt

// fs.writeFileSync("help.txt","help me")
// fs.writeFileSync("help.txt","help me boy,")
// fs.appendFileSync("help.txt", " hello babes")
// const Tuff_data = fs.readFileSync("help.txt");
// console.log(Tuff_data);
// real_data = Tuff_data.toString();
// console.log(real_data);
// fs.renameSync("help.txt","wxyz.txt")