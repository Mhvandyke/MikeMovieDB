import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
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

   private headers = new Headers({'Content-Type': 'application/json'});


  private moviesUrl = './_models/movies';

  constructor( private http: HttpClient,
  // private messageService: MessageService
  ) {


   }

   getMovies() : Promise<Movie[]> {
    return this.http.get('/api/v1/movies')
      .toPromise()
      .then(response => response as Movie[])
      .catch(this.handleError);
}



private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
 }

}





