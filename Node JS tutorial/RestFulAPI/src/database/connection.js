const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/Students-api"//It is connecting with 
).then(()=>{     //the database 
    console.log("connection is successful");
}).catch((err)=>{
    console.log("Koi connection nhi hua chutiye");
})