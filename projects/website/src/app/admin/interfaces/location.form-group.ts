import { AbstractControl, FormGroup } from '@angular/forms';

export interface ILocationForm {
  name: string | null;
  longitude: number | null;
  latitude: number | null;
}

export interface ILocationFormGroup extends FormGroup {
  value: ILocationForm;

  controls: {
    name: AbstractControl;
    longitude: AbstractControl;
    latitude: AbstractControl;
  };
}
