var express = require('express');
var router = express.Router();

const { Board } = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {

  Board.findAll({})
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    res.send(err);
  })
  
});

router.post('/', function(req, res, next) {
  Board.create({
    title: req.body.title,
    content: req.body.content,
  })
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    res.send(err);
  })
});

// router.post('/create', (req, res) => {
//     const item = Board.create({
//         title: req.body.title,
//         content: req.body.content,
//     })
//     res.send(item);
// });

module.exports = router;
