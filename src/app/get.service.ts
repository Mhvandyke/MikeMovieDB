import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor() { }
}

 genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
