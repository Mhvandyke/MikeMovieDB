const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/mikemoviedb';
mongoose.connect(url);



db = mongoose.connection;

var Schema = mongoose.Schema;



var movieSchema = new Schema({
  _id: Object,
  mName:  String,
  mTime: Number,
  mGenre:   String,
  mRating: Number,
  mDirector: String,
  mStatus: Boolean,
},  { collection : 'movies' });

var movie = mongoose.model('movies', movieSchema);

console.log(movie.find());
