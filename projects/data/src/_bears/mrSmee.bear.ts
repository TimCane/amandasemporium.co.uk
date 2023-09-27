// mrSmee.bear.ts
import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { E20230923 } from '../_events/E2023-09-23.event';
import { longparish } from '../_locations/longparish.location';
import { surbiton } from '../_locations/surbiton.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const mrSmee: IBear = {
  Id: 'mr-smee',
  Name: 'Mr Smee',
  Description: '',
  UploadedOn: new Date(2023, 8, 27),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: longparish,
    Date: new Date(2023, 8, 10),
  },
  Event: E20230923,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2023, 8, 23),
  },
};
