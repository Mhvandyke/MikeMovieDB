import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Movie } from '_models/movies';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {



  constructor( private http: HttpClient,
  private messageService: MessageService) { }

}


private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}
