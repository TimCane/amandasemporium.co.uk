import { AbstractControl, FormGroup } from '@angular/forms';

export interface IProductForm {
  name: string | null;
  description: string | null;
  price: string | null;
  hidden: string | null;
  images: string | null;
  order: string | null;
}

export interface IProductFormGroup extends FormGroup {
  value: IProductForm;

  controls: {
    name: AbstractControl;
    description: AbstractControl;
    price: AbstractControl;
    hidden: AbstractControl;
    images: AbstractControl;
    order: AbstractControl;
  };
}
