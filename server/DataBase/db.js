require("dotenv").config();

const config = require("../config.json");
const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        await mongoose.connect(config.connectionstring, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("mongodb connected");
    }
    catch(error){
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    }
}
module.exports = connectDB;

