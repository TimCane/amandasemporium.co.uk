import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20230610 } from '../_events/E2023-06-10.event';
import { basingstoke } from '../_locations/basingstoke.location';
import { chichester } from '../_locations/chichester.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const hugo: IBear = {
  Id: 'hugo',
  Name: 'Hugo',
  Description: ``,
  UploadedOn: new Date(2022, 8, 26),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: chichester,
    Date: new Date(2022, 8, 10),
  },
  Event: E20230610,
  Rehomed: {
    Location: basingstoke,
    Date: new Date(2023, 5, 10),
  },
};
