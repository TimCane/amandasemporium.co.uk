import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-back-a-page',
  templateUrl: './back-a-page.component.html',
  styleUrls: ['./back-a-page.component.scss'],
})
export class BackAPageComponent {
  constructor(public navigation: NavigationService) {}
}
