const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");
const {uploadCloud2} = require("../configs/cloudinary");


router.post("/uploadImage",uploadCloud2.single("imagePath"),(req,res)=>{
  console.log(req.file)
  res.json(req.file.url)
})

router.post('/profilePicture',uploadCloud2.single("photo"), (req, res) => { 
  console.log("llamando?")
  const imgPath=req.body.photo;
  const userId = "5f19695c230147a4bfb1c710";
  console.log(req.body, imgPath, " imgPath")
  User.findByIdAndUpdate(userId, {photo: imgPath}).then(userUpdated => {
    console.log(userUpdated, "userUpdated")
    res.json(userUpdated)
  }).catch(err => console.log(err))
}); 


router.post("/signup", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password)

  if (!password || password.length < 8) {
    return res
      .status(400)
      .json({ message: "Your password must be 8 char. min." });
  }
  if (!username) {
    return res.status(400).json({ message: "Your username cannot be empty" });
  }

  User.findOne({ username: username })
    .then((found) => {
      if (found) {
        return res
          .status(400)
          .json({ message: "This username is already taken" });
      }

      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);

      return User.create({ username: username, password: hash }).then(
        (dbUser) => {
          req.login(dbUser, (err) => {
            if (err) {
              return res
                .status(500)
                .json({ message: "Error while attempting to login" });
            }
            res.json(dbUser);
          });
        }
      );
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/login", (req, res) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      return res.status(500).json({ message: "Error while authenticating" });
    }
    if (!user) {
      return res.status(400).json({ message: "Wrong credentials" });
    }
    req.login(user, (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error while attempting to login" });
      }
      return res.json(user);
    });
  })(req, res);
});

router.delete("/logout", (req, res) => {
  req.logout();
  res.json({ message: "Successful logout" });
});

// returns the logged in user 

router.get("/loggedin", (req, res) => {
  res.json(req.user);
});

module.exports = router;
