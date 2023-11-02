import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TitleService } from '../../services/title.service';
import { SplashAnimationType } from '../splash-screen/splash-screen.component';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent {
  title$: Observable<string> = this.titleService.titleChanged;

  constructor(public titleService: TitleService) {}

  SplashAnimationType = SplashAnimationType;
}
