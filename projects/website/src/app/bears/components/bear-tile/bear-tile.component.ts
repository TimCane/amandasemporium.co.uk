import { Component, Input, OnInit } from '@angular/core';
import { IBear } from 'data';

@Component({
  selector: 'app-bear-tile',
  templateUrl: './bear-tile.component.html',
  styleUrls: ['./bear-tile.component.scss'],
})
export class BearTileComponent implements OnInit {
  @Input() bear: IBear | null;

  @Input() bgColor: string = 'bg-white';
  @Input() textColor: string = 'text-black';
  @Input() borderColor: string = 'border-black';

  constructor() {
    this.bear = null;
  }

  ngOnInit(): void {}
}
