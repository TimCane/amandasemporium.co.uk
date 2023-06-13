import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { loadBears, selectBear } from '../../state/bears.action';
import { getBear } from '../../state/bears.selectors';

@Component({
  selector: 'app-bear-detail',
  templateUrl: './bear-detail.component.html',
  styleUrls: ['./bear-detail.component.scss'],
})
export class BearDetailComponent implements OnInit {
  public bear$ = this.store.select(getBear);

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.store.dispatch(loadBears());

    const bearId = this.route.snapshot.paramMap.get('bearId');

    if (bearId) {
      this.store.dispatch(selectBear({ bearId }));
    }
  }

  ngOnInit(): void {}
}
