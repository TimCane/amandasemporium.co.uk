import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20220924 } from '../_events/E2022-09-24.event';
import { ruislip } from '../_locations/ruislip.location';
import { surbiton } from '../_locations/surbiton.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const jane: IBear = {
  Id: 'jane',
  Name: 'Jane',
  Description: ``,
  UploadedOn: new Date(2021, 9, 7),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: ruislip,
    Date: new Date(2020, 7, 20),
  },
  Event: E20220924,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 8, 24),
  },
};
