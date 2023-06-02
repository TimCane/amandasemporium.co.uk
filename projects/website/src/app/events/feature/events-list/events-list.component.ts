import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { loadEvents, selectEvent } from '../../state/events.action';
import { getUpcomingEvents } from '../../state/events.selectors';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  public allEvents$ = this.store.select(getUpcomingEvents);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadEvents());
    this.store.dispatch(selectEvent({ eventId: null }));
  }
}
