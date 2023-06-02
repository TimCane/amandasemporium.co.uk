import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IBear } from 'data';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { AppState } from '../../../app.state';
import { ScriptService } from '../../../shared/services/script.service';
import { loadBears, selectBear } from '../../state/bears.action';
import { getBears } from '../../state/bears.selectors';

@Component({
  selector: 'app-bears-map',
  templateUrl: './bears-map.component.html',
  styleUrls: ['./bears-map.component.scss'],
})
export class BearsMapComponent implements OnInit {
  public allBears$ = this.store.select(getBears);

  markerOptions: google.maps.MarkerOptions = { draggable: false };
  public mapMarkers$: Observable<google.maps.LatLngLiteral[]>;

  scriptLoadedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  scriptLoaded$: Observable<boolean> = this.scriptLoadedSubject.asObservable();

  constructor(private store: Store<AppState>, scriptService: ScriptService) {
    scriptService.Load('googleMaps').subscribe((data) => {
      this.scriptLoadedSubject.next(true);
    });

    this.mapMarkers$ = this.allBears$.pipe(
      map((bears: IBear[]) => {
        return bears.map((bear) => {
          return {
            lat: bear.Rescued.Location.Latitude,
            lng: bear.Rescued.Location.Longitude,
          };
        });
      })
    );
  }

  getRehomedMarkerIcons() {
    return [
      '/assets/imgs/map-markers/rehomed (1).png',
      '/assets/imgs/map-markers/rehomed (2).png',
      '/assets/imgs/map-markers/rehomed (3).png',
      '/assets/imgs/map-markers/rehomed (4).png',
      '/assets/imgs/map-markers/rehomed (5).png',
      '/assets/imgs/map-markers/rehomed (6).png',
      '/assets/imgs/map-markers/rehomed (7).png',
      '/assets/imgs/map-markers/rehomed (8).png',
      '/assets/imgs/map-markers/rehomed (9).png',
      '/assets/imgs/map-markers/rehomed (10).png',
    ];
  }

  getRescuedMarkerIcons() {
    return [
      '/assets/imgs/map-markers/rescued (1).png',
      '/assets/imgs/map-markers/rescued (2).png',
      '/assets/imgs/map-markers/rescued (3).png',
      '/assets/imgs/map-markers/rescued (4).png',
      '/assets/imgs/map-markers/rescued (5).png',
      '/assets/imgs/map-markers/rescued (6).png',
      '/assets/imgs/map-markers/rescued (7).png',
      '/assets/imgs/map-markers/rescued (8).png',
      '/assets/imgs/map-markers/rescued (9).png',
      '/assets/imgs/map-markers/rescued (10).png',
    ];
  }

  ngOnInit(): void {
    this.store.dispatch(loadBears());
    this.store.dispatch(selectBear({ bearId: null }));
  }
}
