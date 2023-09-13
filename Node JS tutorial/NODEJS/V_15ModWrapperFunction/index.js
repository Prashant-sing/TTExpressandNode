//In Node js all the created files are modules and all are 
//privately scoped
//Node js wraps all the code in a function before the program 
//runs
//(function (exports, require, module, __filename, __dirname) {
    //we could use exports, require,.... functions easily 
    //because compiler was wrapping up the code in these kinds 
    //of functions
    //Means--> These WRAPPER FUNCTIONS ENABLE US TO USE THESE
    //FUNCTIONS (exports, require,...) EASILY
    //Therefore, whatever the file is created, will be private
    //because wrapper function wraps the code.
    // const naam = "BloodX";//Code wrapped in the function
    // console.log(naam);
//});

// IIFE 
(function (){
   const name = "BloodX";
   console.log(name);
})();
