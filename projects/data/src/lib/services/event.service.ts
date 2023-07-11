import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { events } from '../arrays/events.array';
import { IEvent } from '../interfaces/event.interface';
import { ILocation } from '../interfaces/location.interface';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  events = events;
  constructor() {}

  getEvents(): Observable<IEvent[]> {
    return of(Object.values(this.events));
  }

  getEventById(id: string): Observable<IEvent | null> {
    var event = this.events.find((b) => b.Id == id);

    if (event) {
      return of(event);
    }

    return of(null);
  }

  getEventsByLocation(location: ILocation): Observable<IEvent[]> {
    var filtered = this.events.filter((e) => e.Location.Location == location);

    if (filtered) {
      return of(filtered);
    }

    return of([]);
  }
}
