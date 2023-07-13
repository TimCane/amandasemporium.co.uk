import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20230617 } from '../_events/E2023-06-17.event';
import { alton } from '../_locations/alton.location';
import { chicester } from '../_locations/chicester.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const beau: IBear = {
  Id: 'beau',
  Name: 'Beau',
  Description: ``,
  UploadedOn: new Date(2022, 11, 2),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: chicester,
    Date: new Date(2022, 5, 18),
  },
  Event: E20230617,
  Rehomed: {
    Location: alton,
    Date: new Date(2023, 5, 17),
  },
};
