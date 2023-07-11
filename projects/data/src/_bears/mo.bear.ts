import { cobham } from '../_locations/cobham.location';
import { southShields } from '../_locations/southShields.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { bearFactory } from './_brands/bear-factory.bear-brand';
import { monkey } from './_species/monkey.bear-species';

export const mo: IBear = {
  Id: 'mo',
  Name: 'Mo',
  Description: ``,
  UploadedOn: new Date(2021, 6, 16),
  Info: {
    Brand: bearFactory,
    Species: monkey,
  },
  Rescued: {
    Location: cobham,
    Date: new Date(2020, 11, 5),
  },
  Event: null,
  Rehomed: {
    Location: southShields,
    Date: new Date(2021, 11, 5),
  },
};
