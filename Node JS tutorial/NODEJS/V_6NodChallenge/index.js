//<----------- VIDEO-6 ------------>
//CHALLENGE TIME
//1. Create a folder named Thapa
//2. Create a file named bio.txt and data into it
//3. Add more data into the file at the end of existing data
//4. Read the data without getting the buffer data at first
//   To directly read the file data without any buffer, we will 
//   have to encode the files
//5. Rename the file name to mybio.txt
//6. Now delete both the file and folder

const fs = require("fs");
//Creating the folder named Thapa
// fs.mkdirSync("Thapa"); //commented out as we don't want to create 
//this folder again and again as we would run this program many 
//times

//Commented out below commands as they would creat the file 
//again and again, deletion would become impossible
// fs.writeFileSync("Thapa/bio.txt","my name is vinod thapa")
// fs.writeFileSync("Thapa/bio.txt","I am BloodX")
// fs.appendFileSync("Thapa/bio.txt", ", What is up.")

// const data = fs.readFileSync("Thapa/bio.txt", "utf8");//utf8 is 
//used to encode the file
// console.log(data);
// realdata = data.toString();
// console.log(realdata);
// fs.renameSync("Thapa/bio.txt", "Thapa/myBio.txt");//can't 
// rename same file again and again
//Unlink is used to delete files
// fs.unlinkSync("Thapa/myBio.txt")//commented out as now myBio is
//delted
//fs.rmdirSync("Thapa"); //commented out as don't want to delete 
//same folder again and again