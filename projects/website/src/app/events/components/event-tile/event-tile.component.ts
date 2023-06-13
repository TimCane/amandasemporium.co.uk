import { Component, Input } from '@angular/core';
import {
  faClock,
  faEarthEurope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { IEvent } from 'data';

@Component({
  selector: 'app-event-tile',
  templateUrl: './event-tile.component.html',
  styleUrls: ['./event-tile.component.scss'],
})
export class EventTileComponent {
  faLocationDot = faLocationDot;
  faClock = faClock;
  faEarthEurope = faEarthEurope;

  @Input() event: IEvent | null;

  constructor() {
    this.event = null;
  }
}
