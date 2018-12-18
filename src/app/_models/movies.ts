
import { Document, Schema, Model, model} from "mongoose";
import {iMovie} from "../interfaces/iMovie";


    export interface iMovieModel extends iMovie, Document {
  movieName(): String;
}

export var movieSchema : Schema = new Schema({
  _id: Object,
  mName:  String,
  mTime: Number,
  mGenre:   String,
  mRating: Number,
  mDirector: String,
  mStatus: Boolean,
},  { collection : 'movies' });

movieSchema.methods.movieName = function(): string {
  return (this.mName);
};

export const Movie: Model<iMovieModel> = model<iMovieModel>('movies', movieSchema);
