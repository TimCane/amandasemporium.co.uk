import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ScriptService } from '../../../shared/services/script.service';
import { ILocationFormGroup } from '../../interfaces/location.form-group';
import { toProperCase } from '../../utils/to-proper-case';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.scss'],
})
export class CreateLocationComponent {
  locationForm: ILocationFormGroup;

  scriptLoadedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  scriptLoaded$: Observable<boolean> = this.scriptLoadedSubject.asObservable();

  fullAddress: string = '';

  constructor(private fb: FormBuilder, scriptService: ScriptService) {
    scriptService.Load('googleMaps').subscribe((data) => {
      this.scriptLoadedSubject.next(true);
    });

    this.locationForm = fb.group({
      name: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
    }) as ILocationFormGroup;
  }

  get name() {
    if (this.locationForm.value.name == null) {
      return null;
    }

    return toProperCase(this.locationForm.value.name!);
  }

  onClear() {
    this.locationForm.reset();
    this.fullAddress = '';
  }

  onGetLongLat() {
    if (this.name == null) {
      return;
    }

    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: this.name }).then((response) => {
      if (response?.results) {
        if (response.results.length > 0) {
          let result = response.results[0];

          let longitude = result.geometry.location.lng();
          let latitude = result.geometry.location.lat();

          console.log(result);

          this.locationForm.patchValue({
            latitude,
            longitude,
          });

          this.fullAddress =
            result.address_components.map((c) => c.long_name).join(', ') + '.';
        }
      }
    });
  }

  get formattedName() {
    let name = this.name;

    if (name == null) {
      return null;
    }

    return name.charAt(0).toLowerCase() + name.slice(1).replace(/ /g, '');
  }

  get longitude() {
    return this.locationForm.value.longitude;
  }

  get latitude() {
    return this.locationForm.value.latitude;
  }

  get fileArray() {
    let s = [];

    s.push(`// ${this.formattedName}.location.ts`);
    s.push(`import { ILocation } from '../lib/interfaces/location.interface';`);
    s.push('');
    s.push(`export const ${this.formattedName}: ILocation = {`);
    s.push(`    Id: '${this.formattedName}',`);
    s.push(`    Name: '${this.name}',`);
    s.push(`    Latitude: ${this.latitude},`);
    s.push(`    Longitude: ${this.longitude},`);
    s.push(`};`);

    return s;
  }

  get generatedFile() {
    return this.fileArray.join('\n');
  }

  get generatedCommand() {
    let fileArray = this.fileArray;

    fileArray[0] = `echo -e "${fileArray[0]}`;
    fileArray[fileArray.length - 1] = `${
      fileArray[fileArray.length - 1]
    } " > projects/data/src/_locations/${this.formattedName}.location.ts`;

    return fileArray.join('\\n');
  }
}
