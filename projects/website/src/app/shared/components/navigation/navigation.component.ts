import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { loadEvents } from '../../../events/state/events.action';
import { getNextEvent } from '../../../events/state/events.selectors';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public nextEvent$ = this.store.select(getNextEvent);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadEvents());
  }
}
