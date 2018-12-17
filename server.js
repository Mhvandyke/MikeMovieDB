const express = require('express')

const http = require('http');
//const Movie = require('./src/app/_models');
const mongoose = require('mongoose')
const router = express.Router();
const bodyParser = require('body-parser');
const url = 'mongodb://localhost:27017/mikemoviedb';
const app = express();

const hostname = 'localhost';
const port = process.env.PORT || "4040";

app.set("port", port);

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
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



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// router.get('/', function(req,res){
//  console.log("This works bud")
// });


module.exports = movie;
