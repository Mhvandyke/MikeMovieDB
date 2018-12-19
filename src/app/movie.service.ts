import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs';

import { Movie } from './_models/movies';

//import { MessageService } from './message.service';

 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = './_models/movies';

  constructor( private http: HttpClient,
  // private messageService: MessageService
  ) {


   }

   getHeroes() : Promise<Hero[]> {
    return this.http.get('/api/v1/heroes')
      .toPromise()
      .then(response => response.json() as Hero[])
      .catch(this.handleError);
}



}





