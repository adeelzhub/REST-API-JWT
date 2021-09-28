const mongoose = require("mongoose");
require("dotenv").config();

const connection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log("Successfully connected to the database")

    }catch(error){
        console.log("Connection not Successful")
    }

}

connection();