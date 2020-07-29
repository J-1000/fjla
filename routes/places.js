const express = require('express');
const router  = express.Router();
const Place = require("../models/Place");
const User = require("../models/User");
const {uploadCloud} = require("../configs/cloudinary");

router.get('/', (req, res) => {
  Place.find().then(places => {
    res.json(places)
  }).catch(err => console.log(err))
});

router.get('/details/:placeId', (req, res) => {
  Place.findById(req.params.placeId).populate("favorites").then(place => {
    res.json(place)
  }).catch(err => console.log(err))
});

router.get('/userPlaces', (req, res) => {
  console.log(req.user._id, "ID")
  Place.find({userId: req.user._id}).populate("userId").then(userPlaces => {
    console.log(userPlaces)
    res.json(userPlaces)
  }).catch(err => console.log(err))
});

 router.post('/new',uploadCloud.single("photo"), (req, res) => { 
  console.log("llamando?")
  const {title, description, latitude, longitude} = req.body;
  const imgPath=req.body.photo;
  
  Place.create({name: title, description, imgPath, userId: req.user._id, latitude, longitude}).then(newPlace => {
    
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


router.put("/like/:placeId", async (req, res) => {
  const userId = req.user._id;
  
  let user = await User.findById(userId);
  let isFavorite = user.favorites.find((favorite) => {
    return favorite == req.params.placeId;
  });
  
  if (isFavorite) {
    User.findByIdAndUpdate(
      userId,
      {
        $pull: { favorites: req.params.placeId },
      },
      {
        new: true,
      }
    )
      .populate("favorites")
      .then((userUpdated) => {
        Place.findByIdAndUpdate(req.params.placeId, { $inc: { likes: -1 } }, { new: true }).then(placeUpdated => {
          res.json(placeUpdated)
        })
      })
      .catch((err) => res.status(400).json(err));
  } else {
    User.findByIdAndUpdate(
      userId,
      {
        $push: { favorites: req.params.placeId },
      },
      {
        new: true,
      }
    )
      .populate("favorites")
      .then((userUpdated) => {
        Place.findByIdAndUpdate(req.params.placeId, { $inc: { likes: 1 } }, { new: true }).then(placeUpdated => {
          res.json(placeUpdated)
        })
      })
      .catch((err) => res.status(400).json(err));
  }
});

router.get("/favorites", (req, res) => {
  User.findById(req.user._id)
    .populate("favorites")
    .then((user) => {
      if (!user) {
        res.status(404).json(user);
      }
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
