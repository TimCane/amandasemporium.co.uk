import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IBear, ILocation } from 'data';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { AppState } from '../../../app.state';
import { ScriptService } from '../../../shared/services/script.service';
import { loadBears } from '../../state/bears.action';
import { getBears } from '../../state/bears.selectors';

interface MapMarker extends google.maps.LatLngLiteral {
  id: string;
}

@Component({
  selector: 'app-bears-map',
  templateUrl: './bears-map.component.html',
  styleUrls: ['./bears-map.component.scss'],
})
export class BearsMapComponent implements OnInit {
  showRehomed: boolean = true;
  showRescued: boolean = true;

  toggleRehomed() {
    this.showRehomed = !this.showRehomed;
  }

  toggleRescued() {
    this.showRescued = !this.showRescued;
  }

  public allBears$ = this.store.select(getBears);

  options: google.maps.MapOptions = {
    center: { lat: 51.339285, lng: -0.746098 },
    zoom: 9,
  };

  public rescuedMarkers$: Observable<MapMarker[]> = of([]);
  public rehomedMarkers$: Observable<MapMarker[]> = of([]);

  scriptLoadedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  scriptLoaded$: Observable<boolean> = this.scriptLoadedSubject.asObservable();

  constructor(
    private store: Store<AppState>,
    scriptService: ScriptService,
    private router: Router
  ) {
    scriptService.Load('googleMaps').subscribe((data) => {
      this.scriptLoadedSubject.next(true);

      this.rescuedMarkers$ = this.allBears$.pipe(
        map((bears: IBear[]) => {
          let set = new Set<ILocation>();

          for (let i = 0; i < bears.length; i++) {
            set.add(bears[i].Rescued.Location);
          }

          return [...set];
        }),

        map((locations: ILocation[]) => {
          return locations.map((location) => {
            return {
              lat: location.Latitude,
              lng: location.Longitude,
              id: location.Id,
            };
          });
        })
      );

      this.rehomedMarkers$ = this.allBears$.pipe(
        map((bears: IBear[]) => bears.filter((b) => b.Rehomed != null)),
        map((bears: IBear[]) => {
          let set = new Set<ILocation>();

          for (let i = 0; i < bears.length; i++) {
            set.add(bears[i].Rehomed!.Location);
          }

          return [...set];
        }),

        map((locations: ILocation[]) => {
          return locations.map((location) => {
            return {
              lat: location.Latitude,
              lng: location.Longitude,
              id: location.Id,
            };
          });
        })
      );
    });
  }

  onlyUnique(value: any, index: any, array: any) {
    return array.indexOf(value) === index;
  }

  onMarkerClick(marker: MapMarker) {
    this.router.navigate(['/', 'locations', marker.id]);
  }

  rehomedOptions(index: number): google.maps.MarkerOptions {
    let remainder = index % 10;

    return {
      draggable: false,
      icon: `/assets/images/map-markers/rehomed (${remainder + 1}).png`,
    };
  }
  rescuedOptions(index: number): google.maps.MarkerOptions {
    let remainder = index % 10;

    return {
      draggable: false,
      icon: `/assets/images/map-markers/rescued (${remainder + 1}).png`,
    };
  }

  ngOnInit(): void {
    this.store.dispatch(loadBears());
  }
}
