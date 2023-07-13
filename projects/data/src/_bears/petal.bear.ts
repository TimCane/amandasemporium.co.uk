import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20230709 } from '../_events/E2023-07-09.event';
import { seaford } from '../_locations/seaford.location';
import { wallington } from '../_locations/wallington.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const petal: IBear = {
  Id: 'petal',
  Name: 'Petal',
  Description: ``,
  UploadedOn: new Date(2023, 5, 20),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: seaford,
    Date: new Date(2023, 5, 11),
  },
  Event: E20230709,
  Rehomed: {
    Location: wallington,
    Date: new Date(2023, 6, 9),
  },
};
