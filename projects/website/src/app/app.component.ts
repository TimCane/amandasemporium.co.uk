import { Component } from '@angular/core';
import { SplashAnimationType } from './shared/components/splash-screen/splash-screen.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  SplashAnimationType = SplashAnimationType;
}
