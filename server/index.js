require("dotenv").config();

console.log('Access Token Secret:', process.env.ACCESS_TOKEN_SECRET); 

const config = require("./config.json");
const mongoose = require("mongoose");
const multer = require('multer');
const path = require('path');

mongoose.connect(config.connectionstring); 

const User = require("./models/user.model");
const Cloth = require("./models/cloths.model");

const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./utilities");
const { error } = require("console");

app.use(express.json());

app.use(cors
    ({
        origin: "*",
    })
);

app.get("/",(req,res) => {
    res.json({data: "Hello world"});
});

//Create Account
app.post("/create-account", async (req,res) => {
    const { fullName, email, password } = req.body;
    
    if(!fullName) {
        return res.status(400).json({error: true, message: "Full Name is required"});
    }

    if(!email){
        return res.status(400).json({error: true, message: "Email is required"});
    }

    if(!password){
        return res.status(400).json({error: true, message: "Password is required"});
    }

    const isUser = await User.findOne({email: email});

    if(isUser) {
        return res.json({
            error: true,
            message: "User already exists",
        });
    }

    const user = new User({
        fullName,
        email,
        password,
    });

    await user.save();

    const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "36000m",
    });

    return res.json({
        error: false,
        user,
        accessToken,
        message: "Registration Successful",

    });
});

// login
app.post("/login", async(req,res) => {
    const { email, password } = req.body;

    if(!email){
        return res.status(400).json({message: "email is required"});
    }
    
    if(!password){
        return res.status(400).json({message: "password is required"});
    }

    const userInfo = await User.findOne({email: email});

    if(!userInfo){
        return res.status(400).json({message: "user not found"});
    }

    if(userInfo.email == email && userInfo.password == password){
        const user = {user: userInfo};
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "36000m",
        });

        return res.json({
            error: false,
            message: "Login Successfully",
            email,
            accessToken,
        });

    }else{
        return res.status(400).json({
            error: true,
            message: "Invalid Credentials",
        });
    }
})

//Get User
app.get("/get-user", authenticateToken, async (req, res) => {
    if (!req.user) {
        return res.sendStatus(401); // Just in case req.user is not set
    }

    const { user } = req;
    try {
        const isUser = await User.findOne({ userId: user._id });

        if (!isUser) {
            return res.sendStatus(401);
        }

        return res.json({
            user: {
                fullName: isUser.fullName,
                email: isUser.email,
                _id: isUser._id,
                createdOn: isUser.createdOn
            },
            message: "",
        });
    } catch (error) {
        console.error('Database query failed', error);
        return res.sendStatus(500); // Internal Server Error
    }
});


//Add cloth
app.post("/add-cloth",authenticateToken, async(req,res) => {
    const {img, title, price, description} = req.body;

    if(!img){
        return res.status(400).json({error:true, message: "Image is required"});
    }
    if(!title){
        return res.status(400).json({error:true, message: "title is required"});
    }
    if(!price){
        return res.status(400).json({error:true, message: "price is required"});
    }
    if(!description){
        return res.status(400).json({error:true, message: "description is required"});
    }

    try{
        const cloth = new Cloth({
            img,
            title,
            price,
            description,
            userId: User._id,
        });

        await cloth.save();

        return res.json({
            error: false,
            cloth,
            message: "cloth added successfully"
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Internal Server Error", 
        });
    }
});

// Get cloth
app.get("/get-clothes/", authenticateToken, async(req,res) => {
    const {user} = req.user;

    try{
        const cloth = await cloth.find({ userId: user._id });

        return res.json({
            error: false,
            cloth,
            message: "cloth retrieved successfully",
        })
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Interanl Server Error",
        });
    }
});


app.listen(8000);

module.exports = app;
