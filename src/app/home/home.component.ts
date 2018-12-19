import { Component, OnInit } from '@angular/core';

import {Movie} from '../_models/movies'

import {MovieService} from '../movie.service'

import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  
    
  movies : Movie[];

  // movieList = server

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private MovieService: MovieService
  ) { }

  ngOnInit() : void {

    

  this.getMovies();
    
  }

  getMovies(): void {
    this.MovieService
      .getMovies()
      .then(movies => {
        this.movies = movies;
      });
}
    
  }


  