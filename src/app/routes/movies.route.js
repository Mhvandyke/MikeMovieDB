const express = require('express');
const app = express();
const movieRoute = express.Router();

let Movies = require('../_models/movies.ts');

movieRoute.route('').get(function (req, res) {
    Movies.find(function (err, movies){
    if(err){
      console.log(err);
    }
    else {
      res.json(movies);
      console.log(movies);
    }
  });
});