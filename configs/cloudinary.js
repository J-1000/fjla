const cloudinary = require('cloudinary');
const storage_multer = require('multer-storage-cloudinary');
const multer = require('multer');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const trimExtension = fileName => {
  return fileName
  .split('.')
  .slice(0, -1)
  .join('.');
};

const storage = storage_multer({
  cloudinary: cloudinary,
  folder: "tent_pictures",
  allowedFormats: ["jpeg", "png"],
  filename: (req, file, cb) => {
    cb(null, trimExtension(file.originalname));
  }

});

const uploadCloud= multer({storage:storage});

module.exports = uploadCloud;