//Requiring the add module
//const oper = require("./Operator");//Since operator was present 
//outside the index file, therefore we have to move out using ./
// console.log(oper);
// console.log(oper.add(4,5));
// console.log(oper.sub(10,5));
// console.log(oper.multi(10,5));
//  OR
const {add, sub, name, multi} = require("./Operator");
console.log(add(4, 3));
console.log(sub(10, 3));
console.log(multi(10, 3));
console.log(name);