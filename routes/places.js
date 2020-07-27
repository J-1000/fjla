const express = require('express');
const router  = express.Router();
const Place = require("../models/Place");
const {uploadCloud} = require("../configs/cloudinary");

router.get('/', (req, res) => {
  Place.find().then(places => {
    res.json(places)
  }).catch(err => console.log(err))
});

router.get('/userPlaces', (req, res) => {
  console.log(req.user._id, "ID")
  Place.find({userId: req.user._id}).then(userPlaces => {
    console.log(userPlaces)
    res.json(userPlaces)
  }).catch(err => console.log(err))
});

 router.post('/new',uploadCloud.single("photo"), (req, res) => { 
  console.log("llamando?")
  const {title, description, latitude, longitude} = req.body;
  const imgPath=req.body.photo;
  
  Place.create({name: title, description, imgPath, userId: req.user._id, latitude, longitude}).then(newPlace => {
    console.log(newPlace, "newPlace")
    res.json(newPlace)
  }).catch(err => console.log(err))
}); 

router.post("/uploadImage",uploadCloud.single("imagePath"),(req,res)=>{
  console.log(req.file)
  res.json(req.file.url)
})

module.exports = router;
