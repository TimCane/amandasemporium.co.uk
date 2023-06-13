import { AbstractControl, FormGroup } from '@angular/forms';

export interface IContactForm {
  name: string | null;
  email: string | null;
  message: string | null;
}

export interface IContactFormGroup extends FormGroup {
  value: IContactForm;

  controls: {
    name: AbstractControl;
    email: AbstractControl;
    message: AbstractControl;
  };
}
