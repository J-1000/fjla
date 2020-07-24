const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});




// router.post('/users', (req, res, next) => {});
// router.get('/users', (req, res, next) => {});
// router.get('/users/:id', (req, res, next) => {});
// router.put('/users/:id', (req, res, next) => {});
// router.delete('/users/:id', (req, res, next) => {});

module.exports = router;
