import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20191214 } from '../_events/E2019-12-14.event';
import { ashford } from '../_locations/ashford.location';
import { horley } from '../_locations/horley.location';
import { cat } from '../_species/cat.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const felicity: IBear = {
  Id: 'felicity',
  Name: 'Felicity',
  Description: ``,
  UploadedOn: new Date(2019, 11, 12),
  Info: {
    Brand: buildABear,
    Species: cat,
  },
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 9, 24),
  },
  Event: E20191214,
  Rehomed: {
    Location: horley,
    Date: new Date(2019, 11, 14),
  },
};
