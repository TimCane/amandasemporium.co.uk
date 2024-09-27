import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IBearBrandFormGroup } from '../../interfaces/bear-brand.form-group';
import { toProperCase } from '../../utils/to-proper-case';

@Component({
  selector: 'app-create-bear-brand',
  templateUrl: './create-bear-brand.component.html',
  styleUrls: ['./create-bear-brand.component.scss'],
})
export class CreateBearBrandComponent {
  bearBrandForm: IBearBrandFormGroup;

  constructor(private fb: FormBuilder) {
    this.bearBrandForm = fb.group({
      name: ['', [Validators.required]],
    }) as IBearBrandFormGroup;
  }

  get name() {
    if (this.bearBrandForm.value.name == null) {
      return null;
    }

    return toProperCase(this.bearBrandForm.value.name!);
  }

  get formattedName() {
    let name = this.name;

    if (name == null) {
      return null;
    }

    return name.charAt(0).toLowerCase() + name.slice(1).replace(/ /g, '');
  }

  onClear() {
    this.bearBrandForm.reset();
  }

  get fileArray() {
    let s = [];

    s.push(`// ${this.formattedName}.bear-brand.ts`);
    s.push(
      `import { IBearBrand } from '../lib/interfaces/bear-brand.interface';`
    );
    s.push('');
    s.push(`export const ${this.formattedName}: IBearBrand = {`);
    s.push(`    Id: '${this.formattedName}',`);
    s.push(`    Name: '${this.name}',`);
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
    } " > projects/data/src/_bear-brands/${this.formattedName}.bear-brand.ts`;

    return fileArray.join('\\n');
  }
}
