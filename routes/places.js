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

router.post("/delete/:id", (req,res)=>{
  console.log(req.params.id)
  Place.findByIdAndDelete(req.params.id)
  .then(()=> res.json({message: "ok"}))
})

router.post("/like/:id", (req, res) => {
  res.send(req.params.something)
Place.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true }).then(post => {
  
    console.log("post", post);
})
})

router.post("/dislike/:id", (req, res) => {
  res.send(req.params.something)
Place.findByIdAndUpdate(req.params.id, { $inc: { likes: -1 } }, { new: true }).then(post => {
  
    console.log("post", post);
})
})

module.exports = router;
