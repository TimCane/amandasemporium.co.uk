import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { bears } from '../dictionaries/bears.dictonary';
import { IBear } from '../interfaces/bear.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  bears = bears;
  constructor() {}

  getBears(): Observable<IBear[]> {
    return of(Object.values(this.bears));
  }

  getBearById(id: string): Observable<IBear | null> {
    var bear = this.bears[id];

    if (bear) {
      return of(bear);
    }

    return of(null);
  }
}
