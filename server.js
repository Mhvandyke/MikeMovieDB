const express = require('express')
var home = require('./src/app/routes/home');
var movies = require('./src/app/routes/movies.route');

const http = require('http');
//const Movie = require('./src/app/_models');

const router = express.Router();
const bodyParser = require('body-parser');

const app = express();

const hostname = 'localhost';
const port = process.env.PORT || "4020";

app.set("port", port);


const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', home);
app.use('/api/v1/', movies);

// const mongoose = require('mongoose')
// const url = 'mongodb://localhost:27017/mikemoviedb';
// mongoose.connect(url);



// db = mongoose.connection;

// var Schema = mongoose.Schema;



// var movieSchema = new Schema({
//   _id: Object,
//   mName:  String,
//   mTime: Number,
//   mGenre:   String,
//   mRating: Number,
//   mDirector: String,
//   mStatus: Boolean,
// },  { collection : 'movies' });

// var movieList = mongoose.model('movies', movieSchema);




// router.get('/', function(req,res){
//  console.log("This works bud")
// });

// export class moveListService {

// }

module.exports = app;
