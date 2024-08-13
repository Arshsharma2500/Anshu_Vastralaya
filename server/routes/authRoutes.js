const express = require("express");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("../utilities");
const User = require("../models/user.model");
const Cloth = require("../models/cloths.model");
const { upload } = require('../middleware/multer.middleware');

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
router.post("/add-cloth", authenticateToken, async (req, res) => {
    const { img, title, price, description } = req.body;
    const { user } = req.user;

    if (!img) {
        return res.status(400).json({ error: true, message: "Image is required" });
    }
    if (!title) {
        return res.status(400).json({ error: true, message: "Title is required" });
    }
    if (!price) {
        return res.status(400).json({ error: true, message: "Price is required" });
    }
    if (!description) {
        return res.status(400).json({ error: true, message: "Description is required" });
    }

    try {
        const cloth = new Cloth({
            img,
            title,
            price,
            description,
            userId: user._id, // Use the user ID from the authenticated user
        });

        await cloth.save();

        return res.json({
            error: false,
            cloth,
            message: "Cloth added successfully"
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Internal Server Error",
        });
    }
});

// Get clothes route
router.get("/get-clothes", authenticateToken, async (req, res) => {
    const { user } = req.user;

    try {
        const clothes = await Cloth.find({ userId: user._id });

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

//upload image
router.post("/upload", upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: true, message: "File upload failed" });
    }
    console.log(req.file);
    return res.json({ error: false, message: "File uploaded successfully", file: req.file });
});

module.exports = router;
