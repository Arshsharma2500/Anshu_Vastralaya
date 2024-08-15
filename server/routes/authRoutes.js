const express = require("express");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("../utilities");
const User = require("../models/user.model");
const Cloth = require("../models/cloths.model");
const { upload } = require('../middleware/multer.middleware');
const {uploadOnCloudinary} = require("../service/Cloudinary");

const router = express.Router(); // Create a new router instance

// Create Account
router.post("/create-account", async (req, res) => {
    const { fullName, email, password } = req.body;

    if (!fullName) {
        return res.status(400).json({ error: true, message: "Full Name is required" });
    }

    if (!email) {
        return res.status(400).json({ error: true, message: "Email is required" });
    }

    if (!password) {
        return res.status(400).json({ error: true, message: "Password is required" });
    }

    const isUser = await User.findOne({ email: email });

    if (isUser) {
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

    const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "36000m",
    });

    return res.json({
        error: false,
        user,
        accessToken,
        message: "Registration Successful",
    });
});

// Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    if (!password) {
        return res.status(400).json({ message: "Password is required" });
    }

    const userInfo = await User.findOne({ email: email });

    if (!userInfo) {
        return res.status(400).json({ message: "User not found" });
    }

    if (userInfo.email === email && userInfo.password === password) {
        const user = { user: userInfo };
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "36000m",
        });

        return res.json({
            error: false,
            message: "Login Successfully",
            email,
            accessToken,
        });
    } else {
        return res.status(400).json({
            error: true,
            message: "Invalid Credentials",
        });
    }
});

// Get User
router.get("/get-user", authenticateToken, async (req, res) => {
    const { user } = req.user;

    const isUser = await User.findOne({ _id: user._id });

    if (!isUser) {
        return res.sendStatus(401);
    }
    return res.json({
        user: isUser,
        message: "",
    });
});

// Add cloth route
router.post("/upload", upload.single('file'), async (req, res) => {
    try {
        const localFilePath = req.file.path;
        const imageUrl = await uploadOnCloudinary(localFilePath);

        if (!imageUrl) {
            return res.status(500).json({ error: true, message: "Cloudinary upload failed" });
        }

        // Assuming you want to store other details like name, price, description
        const { title, price, description } = req.body;

        const cloth = new Cloth({
            img: imageUrl, // Store the Cloudinary URL
            title,
            price,
            description,
            userId: req.user._id // Assuming the user is authenticated
        });

        await cloth.save();

        return res.json({
            error: false,
            cloth,
            message: "Image uploaded and cloth added successfully"
        });
    } catch (error) {
        console.error("Error in image upload route:", error);
        return res.status(500).json({
            error: true,
            message: "Internal Server Error",
        });
    }
});

// Get clothes route
router.get("/get-clothes", authenticateToken, async (req, res) => {
    try {
        const clothes = await Cloth.find({ userId: req.user._id });

        return res.json({
            error: false,
            clothes,
            message: "Clothes retrieved successfully",
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Internal Server Error",
        });
    }
});



module.exports = router;
