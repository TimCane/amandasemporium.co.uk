// stuart.bear.ts
import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { E20230923 } from '../_events/E2023-09-23.event';
import { addlestone } from '../_locations/addlestone.location';
import { surbiton } from '../_locations/surbiton.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const stuart: IBear = {
  Id: 'stuart',
  Name: 'Stuart',
  Description: '',
  UploadedOn: new Date(2023, 8, 27),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 8, 20),
  },
  Event: E20230923,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2023, 8, 23),
  },
};
