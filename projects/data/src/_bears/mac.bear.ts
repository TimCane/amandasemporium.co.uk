import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20191214 } from '../_events/E2019-12-14.event';
import { cobham } from '../_locations/cobham.location';
import { horley } from '../_locations/horley.location';
import { monkey } from '../_species/monkey.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const mac: IBear = {
  Id: 'mac',
  Name: 'Mac',
  Description: ``,
  UploadedOn: new Date(2019, 11, 12),
  Info: {
    Brand: buildABear,
    Species: monkey,
  },
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 11, 5),
  },
  Event: E20191214,
  Rehomed: {
    Location: horley,
    Date: new Date(2019, 11, 14),
  },
};
