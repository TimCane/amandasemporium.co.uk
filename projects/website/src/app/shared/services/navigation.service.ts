import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private current: string | null = null;
  private history: string[] = [];

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);

        if (event.urlAfterRedirects == '/') {
          this.history = [];
        } else if (this.current) {
          this.history.push(this.current);
        }

        this.current = event.urlAfterRedirects;

        console.log('nav: history', this.history);
        console.log('nav: current', this.current);
      }
    });
  }

  public get CanNavigateBack() {
    return this.history.length != 0;
  }

  public get PreviousUrl() {
    if (this.history.length == 0) {
      return '/';
    } else {
      return this.history[this.history.length - 1];
    }
  }

  public Back(): void {
    let url = this.history.pop();
    this.current = null;

    if (url) {
      this.router.navigateByUrl(url);
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
