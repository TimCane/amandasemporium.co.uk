import { E20230625 } from '../_events/E2023-06-25.event';
import { shepperton } from '../_locations/shepperton.location';
import { thatcham } from '../_locations/thatcham.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const avery: IBear = {
  Id: 'avery',
  Name: 'Avery',
  Description: ``,
  UploadedOn: new Date(2023, 5, 20),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2023, 5, 3),
  },
  Event: E20230625,
  Rehomed: {
    Date: new Date(2023, 5, 25),
    Location: thatcham,
  },
};
