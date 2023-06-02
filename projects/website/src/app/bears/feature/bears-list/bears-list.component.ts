import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { loadBears, selectBear } from '../../state/bears.action';
import {
  getCountOfBears,
  getCountOfRehomedBears,
  getRehomedBears,
  getRescuedBears,
} from '../../state/bears.selectors';

@Component({
  selector: 'app-bears-list',
  templateUrl: './bears-list.component.html',
  styleUrls: ['./bears-list.component.scss'],
})
export class BearsListComponent implements OnInit {
  public rescuedBears$ = this.store.select(getRescuedBears);
  public rehomedBears$ = this.store.select(getRehomedBears);

  public countOfBears$ = this.store.select(getCountOfBears);
  public countOfRehomedBears$ = this.store.select(getCountOfRehomedBears);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadBears());
    this.store.dispatch(selectBear({ bearId: null }));
  }
}
