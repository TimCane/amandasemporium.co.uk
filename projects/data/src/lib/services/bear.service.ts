import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BearBrands } from '../arrays/bear-brands.array';
import { BearSpecies } from '../arrays/bear-species.array';
import { Bears } from '../arrays/bears.array';
import { IBearBrand } from '../interfaces/bear-brand.interface';
import { IBearSpecies } from '../interfaces/bear-species.interface';
import { IBear } from '../interfaces/bear.interface';
import { ILocation } from '../interfaces/location.interface';

@Injectable({
  providedIn: 'root',
})
export class BearService {
  bears = Bears;
  brands = BearBrands;
  species = BearSpecies;

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

  getBrands(): Observable<IBearBrand[]> {
    return of(Object.values(this.brands));
  }

  getSpecies(): Observable<IBearSpecies[]> {
    return of(Object.values(this.species));
  }

  getBearsByLocation(location: ILocation): Observable<IBear[]> {
    var rehomed = this.bears.filter((e) => e.Rehomed?.Location == location);
    var rescued = this.bears.filter((e) => e.Rescued?.Location == location);
    var event = this.bears.filter(
      (e) => e.Event?.Location.Location == location
    );

    return of([...rehomed, ...rescued, ...event]);
  }
}
