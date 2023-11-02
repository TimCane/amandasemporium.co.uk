import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { monkey } from '../_bear-species/monkey.bear-species';
import { jacobsWell } from '../_locations/jacobsWell.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const hudson: IBear = {
  Id: 'hudson',
  Name: 'Hudson',
  Description: ``,
  UploadedOn: new Date(2023, 10, 2),
  Info: {
    Brand: buildABear,
    Species: monkey,
  },
  Rescued: {
    Location: jacobsWell,
    Date: new Date(2023, 8, 17),
  },
  Event: null,
  Rehomed: null,
};
