//Creating our own modules -->  USER DEFINED MODULES

//In Node js all the individual files are modules and all are 
//private to itself and to export those modules to another modules
//we have to make modules public.
const add = (a, b) => {
    return a+b;
};
const sub = (a, b) => {
    return a-b;
};
const multi = (a, b) => {
    return a*b;
};
const name = "BloodX";
// module exports = add;//It will make "add" public to all files
// module exports = name;//We can export anything from the files
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.multi = multi;
// or
module.exports = {add, sub, multi, name};
