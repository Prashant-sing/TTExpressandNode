const path = require("path");
//To get the below path, right click on the file name above and
//copy the path
console.log(
  path.dirname("D:/WORK/ThapaTechnical/Node JS tutorial/V_11PathModule/path.js")
);
console.log(
  path.extname("D:/WORK/ThapaTechnical/Node JS tutorial/V_11PathModule/path.js")
);
console.log(
  path.basename(
    "D:/WORK/ThapaTechnical/Node JS tutorial/V_11PathModule/path.js"
  )
);
console.log(
  path.parse("D:/WORK/ThapaTechnical/Node JS tutorial/V_11PathModule/path.js")
);
const mypath = path.parse(
  "D:/WORK/ThapaTechnical/Node JS tutorial/V_11PathModule/path.js"
);
console.log(mypath.root);
console.log(mypath.name);
