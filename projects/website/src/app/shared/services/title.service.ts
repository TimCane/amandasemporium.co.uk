import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private titleChangedSub: BehaviorSubject<string>;

  titleChanged: Observable<string>;

  constructor(private router: Router, private titleService: Title) {
    this.titleChangedSub = new BehaviorSubject('');
    this.titleChanged = this.titleChangedSub.asObservable();

    this.watchRouteChange();
  }

  watchRouteChange() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
          }
          return routeTitle;
        })
      )
      .subscribe((title: string) => {
        if (title) {
          this.setTitle(title);
        }
      });
  }

  setTitle(title: string) {
    title = this.titleCase(title);

    this.titleChangedSub.next(title);
    this.titleService.setTitle(`${title} | Amanda's Emporium`);
  }

  titleCase(str: string) {
    let words = str.toLowerCase().split(' ');
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  }
}
