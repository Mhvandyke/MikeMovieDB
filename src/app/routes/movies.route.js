var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://localhost:27017/mikemoviedb', ['movies']);


router.get('/', function(req, res) {
    db.movies.find(function(err, movies) {
      if (err) {
        res.send(err);
      } else {
        res.json(movies);
      }
    });
  });

  module.exports = router;