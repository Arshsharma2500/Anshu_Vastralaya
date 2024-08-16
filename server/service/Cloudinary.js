const cloudinary = require('cloudinary').v2; 
const fs = require('fs');
require('dotenv').config(); // Load environment variables

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const uploadResult = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        // Delete the local file after uploading
        fs.unlinkSync(localFilePath);

        console.log("File has been uploaded successfully:", uploadResult.url);
        return uploadResult.url; // Return the URL of the uploaded image
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        fs.unlinkSync(localFilePath); // Remove the locally saved file in case of error
        return null;
    }
};

module.exports = { uploadOnCloudinary };
