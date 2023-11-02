import { AbstractControl, FormGroup } from '@angular/forms';

export interface IBearBrandForm {
  name: string | null;
}

export interface IBearBrandFormGroup extends FormGroup {
  value: IBearBrandForm;

  controls: {
    name: AbstractControl;
  };
}
