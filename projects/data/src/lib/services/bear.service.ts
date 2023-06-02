import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { bears } from '../arrays/bears.array';
import { IBear } from '../interfaces/bear.interface';

@Injectable({
  providedIn: 'root',
})
export class BearService {
  bears = bears;
  constructor() {}

  getBears(): Observable<IBear[]> {
    return of(Object.values(this.bears));
  }

  getBearById(id: string): Observable<IBear | null> {
    var bear = this.bears.find((b) => b.Id == id);

    if (bear) {
      return of(bear);
    }

    return of(null);
  }
}
