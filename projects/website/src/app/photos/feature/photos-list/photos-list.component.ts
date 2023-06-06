import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { loadPhotos } from '../../state/photos.action';
import { getCategories, getPhotos } from '../../state/photos.selectors';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss'],
})
export class PhotosListComponent implements OnInit {
  public categories$ = this.store.select(getCategories);
  public photos$ = this.store.select(getPhotos);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadPhotos());
    //this.store.dispatch(loadCategories());
  }
}
