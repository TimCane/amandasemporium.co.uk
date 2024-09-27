import { NgModule } from '@angular/core';
import { BearService } from './services/bear.service';
import { EventService } from './services/event.service';
import { LocationService } from './services/location.service';
import { PhotoService } from './services/photo.service';
import { ProductService } from './services/product.service';

@NgModule({
  providers: [
    BearService,
    EventService,
    ProductService,
    PhotoService,
    LocationService,
  ],
})
export class DataModule {}
