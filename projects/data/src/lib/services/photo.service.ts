import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { photos } from '../arrays/photos.array';
import { IPhoto } from '../interfaces/photo.interface';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  photos = photos;
  constructor() {}

  getPhotos(): Observable<IPhoto[]> {
    return of(Object.values(this.photos));
  }

  getPhotoById(id: string): Observable<IPhoto | null> {
    var photo = this.photos.find((b) => b.Id == id);

    if (photo) {
      return of(photo);
    }

    return of(null);
  }
}
