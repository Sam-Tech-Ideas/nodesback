const mongoose = require("mongoose");
const dotenv = require("dotenv")


const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log("Db connected"
        )


            

    }

    catch{
        console.log("Db connection failed")

    }
} 
module.exports = connectDB;