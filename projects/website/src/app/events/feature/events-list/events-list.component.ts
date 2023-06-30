import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import {
  getLessPastEvents,
  getMorePastEvents,
  loadEvents,
} from '../../state/events.action';
import {
  getCanSeeLess,
  getCanSeeMore,
  getNextEvent,
  getPaginatedPastEvents,
  getUpcomingEvents,
} from '../../state/events.selectors';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  public upcomingEvents$ = this.store.select(getUpcomingEvents);
  public pastEvents$ = this.store.select(getPaginatedPastEvents);
  public nextEvent$ = this.store.select(getNextEvent);

  public canSeeMore$ = this.store.select(getCanSeeMore);
  public canSeeLess$ = this.store.select(getCanSeeLess);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadEvents());
  }

  onSeeMore() {
    this.store.dispatch(getMorePastEvents({ count: 5 }));
  }

  onSeeLess() {
    this.store.dispatch(getLessPastEvents({ count: 5 }));
  }
}
