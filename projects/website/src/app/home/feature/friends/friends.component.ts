import { Component, OnInit } from '@angular/core';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  faEarthEurope = faEarthEurope;

  constructor() {}

  ngOnInit(): void {}
}
