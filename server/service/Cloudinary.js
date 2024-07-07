import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";
import { PiNuclearPlantLight } from 'react-icons/pi';

 // Configuration
cloudinary.config({ 
    cloud_name: process.env.COUNDINARY_CLOUD_NAME, 
    api_key: process.env.COUNDINARY_API_KEY, 
    api_secret: process.env.COUNDINARY_API_SECRET 
});

const uploadOnCloudinary = async (loclaFilePath) => {
    
    try{
        if(!loclaFilePath) return null
        //upload the file on cloudinary
        const uploadResult = await cloudinary.uploader.upload
        (loclaFilePath, {
                resource_type: "auto"
            }
        )
        
        .catch((error) => {
            
            console.log(error);
        });
        //file has been uploaded successfully
        console.log("file has been uploaded successfully", uploadResult.url);
        return uploadResult;
    }
    catch (error){
        fs.unlinkSync(loclaFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
 
 // Optimize delivery by resizing and applying auto-format and auto-quality
//  const optimizeUrl = cloudinary.url('shoes', {
//      fetch_format: 'auto',
//      quality: 'auto'
//  });
 
//  console.log(optimizeUrl);
 
 // Transform the image: auto-crop to square aspect_ratio
//  const autoCropUrl = cloudinary.url('shoes', {
//      crop: 'auto',
//      gravity: 'auto',
//      width: 500,
//      height: 500,
//  });
 
//  console.log(autoCropUrl);    
};

export {uploadOnCloudinary}
