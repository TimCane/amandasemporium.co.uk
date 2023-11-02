import { AbstractControl, FormGroup } from '@angular/forms';

export interface IEventForm {
  name: string | null;
  date: string | null;
  description: string | null;
  location: string | null;
  locationName: string | null;
  website: string | null;
  time: string | null;
}

export interface IEventFormGroup extends FormGroup {
  value: IEventForm;

  controls: {
    name: AbstractControl;
    date: AbstractControl;
    description: AbstractControl;
    location: AbstractControl;
    locationName: AbstractControl;
    website: AbstractControl;
    time: AbstractControl;
  };
}
