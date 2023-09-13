const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlenght: 3
    },
    email:{
        type: String,
        required: true,
        unique:[true, "Email id is already present"],
        validate(value){
            if(!validator.isEmail(value)){//"ïsEmail" is a npm validator
                throw new Error("Invalid Email");
            }
        }
    },
    phone:{
        type: Number,
        required: true,
        min: 10,
        // max: 10,
        unique: true
    },
    address:{
        type: String,
        required: true
    }
})

//  <--------------- CREATING COLLECTIONS ------------------>
const Student = new mongoose.model('Student', studentSchema);//Collection 
//name must start with a Capital letter & must be singular
module.exports = Student;//Exporting the collection so that other files 
//could use this schema