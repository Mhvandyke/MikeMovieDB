import { Component, OnInit } from '@angular/core';

import {Movie} from '../_models/movies'


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
    private movieService: movieService
  ) { }

  ngOnInit() : void {

    

  this.getMovies();
    
  }

  getMovies(): void {
    this.movieService
      .getHeroes()
      .then(movies => {
        this.movies = movies;
      });
}
    
  }


  