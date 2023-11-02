import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { jacobsWell } from '../_locations/jacobsWell.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const tiana: IBear = {
  Id: 'tiana',
  Name: 'Tiana',
  Description: ``,
  UploadedOn: new Date(2023, 10, 2),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: jacobsWell,
    Date: new Date(2023, 8, 17),
  },
  Event: null,
  Rehomed: null,
};
