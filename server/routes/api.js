var express = require('express');
var router = express.Router();
var Llama = require('../models/llamas.js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Llamas' });
});

//GET ALL llamas
router.get('/llamas', function(req, res, next) {
  Llama.find({}, function(err, llamas) {
    if (err) {
      res.json({"message": err});
    } else {
      res.json(llamas);
    }
  });
});

//GET single llama
router.get('/llama/:id', function(req, res, next) {
  Llama.findById(req.params.id, function(err, llama) {
    if (err) {
      res.json({"message": err});
    } else {
      res.json(llamas);
    }
  });
});

//POST ALL llamas
router.post ('/llamas', function(req, res, next) {
  var newLlama = new Llama ({
    name: req.body.name,
    age: req.body.age,
    spitter: req.body.spitter
  });
  newLlama.save(function(err, llama) {
    if (err) {
      res.json({"message": err});
    } else {
      res.json(llama);
    }
  });
});

//PUT single llama
router.put('/llama/:id', function(req, res, next) {
  Llama.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, llama) {
    if (err) {
      res.json({"message": err});
    } else {
      res.json(llama);
    }
  });
});

//DELETE single llama
router.delete('/llama/:id', function(req, res, next) {
  Llama.findByIdAndRemove(req.params.id, function(err, llama) {
    if (err) {
      res.json({"message": err});
    } else {
      res.json(llama);
    }
  });
});

module.exports = router;
