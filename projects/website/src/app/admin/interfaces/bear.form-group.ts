import { AbstractControl, FormGroup } from '@angular/forms';
import { IBearBrand, IBearSpecies, IEvent, ILocation } from 'data';

export interface IBearForm {
  name: string | null;
  description: string | null;
  uploadedOn: Date | null;
  brand: IBearBrand | null;
  species: IBearSpecies | null;
  rescuedLocation: ILocation | null;
  rescuedDate: Date | null;
  event: IEvent | null;
  rehomedLocation: ILocation | null;
  rehomedDate: Date | null;
}

export interface IBearFormGroup extends FormGroup {
  value: IBearForm;

  controls: {
    name: AbstractControl;
    description: AbstractControl;
    uploadedOn: AbstractControl;
    brand: AbstractControl;
    species: AbstractControl;
    rescuedLocation: AbstractControl;
    rescuedDate: AbstractControl;
    event: AbstractControl;
    rehomedLocation: AbstractControl;
    rehomedDate: AbstractControl;
  };
}
