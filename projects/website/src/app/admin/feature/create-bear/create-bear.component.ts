import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  BearService,
  EventService,
  IBearBrand,
  IBearSpecies,
  IEvent,
  ILocation,
  LocationService,
} from 'data';
import { Observable } from 'rxjs';
import { IBearFormGroup } from '../../interfaces/bear.form-group';
import { toProperCase } from '../../utils/to-proper-case';

@Component({
  selector: 'app-create-bear',
  templateUrl: './create-bear.component.html',
  styleUrls: ['./create-bear.component.scss'],
})
export class CreateBearComponent {
  bearForm: IBearFormGroup;

  species$: Observable<IBearSpecies[]>;
  brands$: Observable<IBearBrand[]>;

  locations$: Observable<ILocation[]>;

  events$: Observable<IEvent[]>;

  constructor(
    private fb: FormBuilder,
    private bearService: BearService,
    private locationService: LocationService,
    private eventService: EventService
  ) {
    this.bearForm = fb.group({
      brand: [null, [Validators.required]],
      description: [null, [Validators.required]],
      event: [null],
      name: [null, [Validators.required]],
      rehomedDate: [null],
      rehomedLocation: [null],
      rescuedDate: [null, [Validators.required]],
      rescuedLocation: [null, [Validators.required]],
      species: [null, [Validators.required]],
      uploadedOn: [this.todaysDate(), [Validators.required]],
    }) as IBearFormGroup;

    this.brands$ = bearService.getBrands();
    this.species$ = bearService.getSpecies();
    this.locations$ = locationService.getLocations();
    this.events$ = eventService.getEvents();
  }

  todaysDate() {
    let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  }

  get brand() {
    return this.bearForm.value.brand;
  }

  get species() {
    return this.bearForm.value.species;
  }

  get uploadedOn() {
    return this.bearForm.value.uploadedOn;
  }

  get rescuedDate() {
    return this.bearForm.value.rescuedDate;
  }

  get rescuedLocation() {
    return this.bearForm.value.rescuedLocation;
  }

  get rehomedLocation() {
    return this.bearForm.value.rehomedLocation;
  }

  get description() {
    return this.bearForm.value.description;
  }

  get event() {
    return this.bearForm.value.event;
  }

  get rehomedDate() {
    return this.bearForm.value.rehomedDate;
  }

  get name() {
    if (this.bearForm.value.name == null) {
      return null;
    }

    return toProperCase(this.bearForm.value.name!);
  }

  get formattedName() {
    let name = this.name;

    if (name == null) {
      return null;
    }

    return name.charAt(0).toLowerCase() + name.slice(1).replace(/ /g, '');
  }

  onClear() {
    debugger;
    this.bearForm.reset();
  }

  getFormattedDate(date: Date | null) {
    if (date == null) {
      return 'null';
    }

    date = new Date(date?.toString());

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    return `new Date (${year},${month},${day})`;
  }

  getFormattedEvent(event: IEvent | null) {
    if (event == null) {
      return 'null';
    }

    let year = event.Date.getFullYear();
    let month = ('0' + (event.Date.getMonth() + 1)).slice(-2);
    let day = ('0' + event.Date.getDate()).slice(-2);

    return `E${year}-${month}-${day}`;
  }

  get fileArray() {
    let s: string[] = [];

    let formattedEvent = this.getFormattedEvent(this.event);
    let formattedEventName = formattedEvent.replaceAll('-', '');

    s.push(`// ${this.formattedName}.bear.ts`);
    s.push(`import { IBear } from '../lib/interfaces/bear.interface';`);

    s.push(
      `import { ${this.brand?.Id} } from '../_bear-brands/${this.brand?.Id}.bear-brand';`
    );
    s.push(
      `import { ${formattedEventName} } from '../_events/${formattedEvent}.event';`
    );
    s.push(
      `import { ${this.rehomedLocation?.Id} } from '../_locations/${this.rehomedLocation?.Id}.location';`
    );
    s.push(
      `import { ${this.rescuedLocation?.Id} } from '../_locations/${this.rescuedLocation?.Id}.location';`
    );
    s.push(
      `import { ${this.species?.Id} } from '../_bear-species/${this.species?.Id}.bear-species';`
    );
    s.push('');
    s.push(`export const ${this.formattedName}: IBear = {`);
    s.push(`  Id: '${this.formattedName}',`);
    s.push(`  Name: '${this.name}',`);
    s.push(`  Description: '${this.description}',`);
    s.push(`  UploadedOn: ${this.getFormattedDate(this.uploadedOn)},`);
    s.push(`  Info: {`);
    s.push(`    Brand: ${this.brand?.Id},`);
    s.push(`    Species: ${this.species?.Id},`);
    s.push(`  },`);
    s.push(`  Rescued: {`);
    s.push(`    Location: ${this.rescuedLocation?.Id},`);
    s.push(`    Date: ${this.getFormattedDate(this.rescuedDate)},`);
    s.push(`  },`);
    s.push(`  Event: ${formattedEventName},`);
    s.push(`  Rehomed: {`);
    s.push(`    Location: ${this.rehomedLocation?.Id},`);
    s.push(`    Date: ${this.getFormattedDate(this.rehomedDate)},`);
    s.push(`  },`);
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
    } " > projects/data/src/_bears/${this.formattedName}.bear.ts`;

    return fileArray.join('\\n');
  }
}
