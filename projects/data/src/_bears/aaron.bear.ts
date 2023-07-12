import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20190525 } from '../_events/E2019-05-25.event';
import { etonWick } from '../_locations/etonWick.location';
import { southsea } from '../_locations/southsea.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const aaron: IBear = {
  Id: 'aaron',
  Name: 'Aaron',
  Description: ``,
  UploadedOn: new Date(2018, 10, 12),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2018, 9, 13),
  },
  Event: E20190525,
  Rehomed: {
    Location: etonWick,
    Date: new Date(2019, 4, 25),
  },
};
