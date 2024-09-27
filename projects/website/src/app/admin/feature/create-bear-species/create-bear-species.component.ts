import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IBearSpeciesFormGroup } from '../../interfaces/bear-species.form-group';
import { toProperCase } from '../../utils/to-proper-case';

@Component({
  selector: 'app-create-bear-species',
  templateUrl: './create-bear-species.component.html',
  styleUrls: ['./create-bear-species.component.scss'],
})
export class CreateBearSpeciesComponent {
  bearSpeciesForm: IBearSpeciesFormGroup;

  constructor(private fb: FormBuilder) {
    this.bearSpeciesForm = fb.group({
      name: ['', [Validators.required]],
    }) as IBearSpeciesFormGroup;
  }

  get formattedName() {
    let name = this.name;

    if (name == null) {
      return null;
    }

    return name.charAt(0).toLowerCase() + name.slice(1).replace(/ /g, '');
  }

  get name() {
    if (this.bearSpeciesForm.value.name == null) {
      return null;
    }

    return toProperCase(this.bearSpeciesForm.value.name!);
  }

  onClear() {
    this.bearSpeciesForm.reset();
  }

  get fileArray() {
    let s = [];

    s.push(`// ${this.formattedName}.bear-species.ts`);
    s.push(
      `import { IBearSpecies } from '../lib/interfaces/bear-species.interface';`
    );
    s.push('');
    s.push(`export const ${this.formattedName}: IBearSpecies = {`);
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
    } " > projects/data/src/_bear-species/${
      this.formattedName
    }.bear-species.ts`;

    return fileArray.join('\\n');
  }
}
