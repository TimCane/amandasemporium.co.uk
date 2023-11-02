import { AbstractControl, FormGroup } from '@angular/forms';

export interface IBearSpeciesForm {
  name: string | null;
}

export interface IBearSpeciesFormGroup extends FormGroup {
  value: IBearSpeciesForm;

  controls: {
    name: AbstractControl;
  };
}
