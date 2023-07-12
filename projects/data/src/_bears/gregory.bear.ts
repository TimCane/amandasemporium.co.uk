import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20191214 } from '../_events/E2019-12-14.event';
import { ashford } from '../_locations/ashford.location';
import { crawley } from '../_locations/crawley.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const gregory: IBear = {
  Id: 'gregory',
  Name: 'Gregory',
  Description: ``,
  UploadedOn: new Date(2019, 11, 12),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 9, 24),
  },
  Event: E20191214,
  Rehomed: {
    Location: crawley,
    Date: new Date(2019, 11, 14),
  },
};
