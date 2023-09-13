//JSON -> Javascript Object Notation, it is used to transpot data
//from the web server to pages
const fs = require("fs");
const biodata = {
  naam: "BloodX",
  umar: 22,
  kaam: "Chaatrra",
  mohalla: "Jai Bharat Colony, Pakka Bagh, Etawah",
};
// console.log(biodata.mohalla);
// //"stringify" is used to convert the object into JSON and "parse" is
// //used to convert JSON into object
// const jsondata = JSON.stringify(biodata);//Object -> JSON
// console.log(jsondata);

// const objdata = JSON.parse(jsondata);
// console.log(objdata);

//TASK -> 1. CONVERT THE OBJECT INTO JSON
//        2. DUSRE FILE ME ADD KRNA H
//        3. READFILE
//        4. AGAIN CONVERT BACK TO JS OBJECT(ORIGINAL)
//        5. CONSOLE.LOG();

//1. is done
const jsondata = JSON.stringify(biodata);

//2. is done
// fs.writeFile("json1.json",jsondata, (err) =>{
//     console.log("json file created");
// });

//3. is done
//Suppose json1 file is API or server from which we r going to read
//the data
fs.readFile("json1.json", "utf-8", (err, data) => {
  //4. is done
  console.log(data);

  //5. is done
  const objdata = JSON.parse(data);
  console.log(objdata);
});
