//Partials are like classes. Basically we store a particular kind
//of code here, which seems to be repeating so that we may not 
//need to write the same code again and again. We would simply 
//call that function

//To add partials in any folder, we would have to use 
//"{{>partials' name}}"

// In REACT, we do same thing through COMPONENTS, but in EXPRESS 
// it is PARTIALS....

// <------------------ I M P O R T A N T ------------------>
// If we want nodemon command to detect all changes in 
// .hbs, .js, .exe ..... files then we will have to run
// nodemon filename.extension -e js,hbs
// Ex- nodemon index.js -e js,hbs --> 
// 1. js,hbs means now nodemon will start detecting all
// the minor changes in js & hbs files
// 2. -e represents the extension