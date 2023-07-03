import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import {
  loadBears,
  setFilter,
  setLetterFilter,
} from '../../state/bears.action';
import {
  getAvailableLetters,
  getFilteredBears,
} from '../../state/bears.selectors';

@Component({
  selector: 'app-bears-list',
  templateUrl: './bears-list.component.html',
  styleUrls: ['./bears-list.component.scss'],
})
export class BearsListComponent implements OnInit {
  public bears$ = this.store.select(getFilteredBears);
  public availableLetters$ = this.store.select(getAvailableLetters);

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(loadBears());

    let filter: string | null = this.route!.snapshot.data['filter'];
    this.store.dispatch(setFilter({ filter }));

    this.onLetterClicked(null);
  }

  onLetterClicked(letter: string | null) {
    this.store.dispatch(setLetterFilter({ letter }));
  }
}
