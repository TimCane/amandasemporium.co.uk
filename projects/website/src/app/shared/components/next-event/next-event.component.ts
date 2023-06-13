import { Component, Input, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { IEvent } from 'data';

@Component({
  selector: '[app-next-event]',
  templateUrl: './next-event.component.html',
  styleUrls: ['./next-event.component.scss'],
})
export class NextEventComponent implements OnInit {
  @Input() event: IEvent | null;

  faCalendar = faCalendar;

  constructor() {
    this.event = null;
  }

  ngOnInit(): void {}
}
