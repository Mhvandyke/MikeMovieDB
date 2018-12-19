
import { Document, Schema, Model, model} from "mongoose";import {iMovie} from "../interfaces/iMovie";

export interface iMovie {
  _id?: Object;
  mName?:  String;
  mTime?: Number;
  mGenre?:   String;
  mRating?: Number;
  mDirector?: String;
  mStatus?: Boolean;
}
  
  export class Movie implements iMovie {
  _id: Object;
  mName:  String;
  mTime: Number;
  mGenre:   String;
  mRating: Number;
  mDirector: String;
  mStatus: Boolean;
   constructor(init: Movie
  ) {
    Object.assign(this, init);
}
}


// export var movieSchema : Schema = new Schema({
//   _id: Object,
//   mName:  String,
//   mTime: Number,
//   mGenre:   String,
//   mRating: Number,
//   mDirector: String,
//   mStatus: Boolean,
// },  { collection : 'movies' });
