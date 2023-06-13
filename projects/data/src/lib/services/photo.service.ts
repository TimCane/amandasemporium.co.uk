import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { photos } from '../arrays/photos.array';
import { PhotoTag } from '../enums/photo-tag.enum';
import { IPhoto } from '../interfaces/photo.interface';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  photos = photos;
  constructor() {}

  getCategories(): Observable<PhotoTag[]> {
    let tags: PhotoTag[] = [];

    for (var key in PhotoTag) {
      tags.push(PhotoTag[key as keyof typeof PhotoTag]);
    }

    return of(tags);
  }

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
