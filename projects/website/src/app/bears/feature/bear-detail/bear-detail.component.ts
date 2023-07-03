import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, take } from 'rxjs';
import { AppState } from '../../../app.state';
import { TitleService } from '../../../shared/services/title.service';
import { loadBears, selectBear } from '../../state/bears.action';
import { getBear } from '../../state/bears.selectors';

@Component({
  selector: 'app-bear-detail',
  templateUrl: './bear-detail.component.html',
  styleUrls: ['./bear-detail.component.scss'],
})
export class BearDetailComponent implements OnInit {
  public bear$ = this.store.select(getBear);

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private titleService: TitleService
  ) {
    this.store.dispatch(loadBears());

    const bearId = this.route.snapshot.paramMap.get('bearId');

    if (bearId) {
      this.store.dispatch(selectBear({ bearId }));
    }

    this.bear$
      .pipe(
        take(1),
        filter((b) => b != undefined && b != null)
      )
      .subscribe((bear) => {
        if (bear != undefined && bear != null) {
          this.titleService.setTitle(bear.Name);
        }
      });
  }

  ngOnInit(): void {}
}
