const express = require("express");
const cors = require("cors");
const multer = require('multer');
const path = require('path');
const connectDB = require('./DataBase/db.js');

// connect to DataBase
connectDB();

const User = require("./models/user.model");
const Cloth = require("./models/cloths.model");
const authRoutes = require('./routes/authRoutes.js');
const { authenticateToken } = require("./utilities");

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS
app.use(cors({
    origin: "*",
}));

// Simple route to check if server is running
app.get("/", (req, res) => {
    res.json({ data: "Hello world" });
});

// Use authentication routes
app.use('/api/auth', authRoutes);



// Start the server
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

module.exports = app;
