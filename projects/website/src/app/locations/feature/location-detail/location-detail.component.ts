import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, take } from 'rxjs';
import { AppState } from '../../../app.state';
import { TitleService } from '../../../shared/services/title.service';
import { loadLocations, selectLocation } from '../../state/locations.action';
import { getLocation } from '../../state/locations.selectors';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss'],
})
export class LocationDetailComponent {
  public location$ = this.store.select(getLocation);

  showMoreDescription: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private titleService: TitleService
  ) {
    this.store.dispatch(loadLocations());

    const locationId = this.route.snapshot.paramMap.get('locationId');

    if (locationId) {
      this.store.dispatch(selectLocation({ locationId }));
    }

    this.location$
      .pipe(
        take(1),
        filter((b) => b != undefined && b != null)
      )
      .subscribe((location) => {
        if (location != undefined && location != null) {
          this.titleService.setTitle(location.Name);
        }
      });
  }
}
