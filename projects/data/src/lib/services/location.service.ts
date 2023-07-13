import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Locations } from '../arrays/locations.array';
import { ILocation } from '../interfaces/location.interface';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  locations = Locations;
  constructor() {}

  getLocations(): Observable<ILocation[]> {
    return of(Object.values(this.locations));
  }

  getLocationById(id: string): Observable<ILocation | null> {
    var location = this.locations.find((b) => b.Id == id);

    if (location) {
      return of(location);
    }

    return of(null);
  }
}
