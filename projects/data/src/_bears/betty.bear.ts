import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20230625 } from '../_events/E2023-06-25.event';
import { shepperton } from '../_locations/shepperton.location';
import { thatcham } from '../_locations/thatcham.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const betty: IBear = {
  Id: 'betty',
  Name: 'Betty',
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
