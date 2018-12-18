import { Component, OnInit } from '@angular/core';
import {server} from '../../../server.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  
  movieList = server;

  constructor() { }

  ngOnInit() {
    
  }

}
