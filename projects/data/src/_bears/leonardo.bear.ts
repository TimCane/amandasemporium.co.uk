import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20210925 } from '../_events/E2021-09-25.event';
import { cobham } from '../_locations/cobham.location';
import { kingston } from '../_locations/kingston.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const leonardo: IBear = {
  Id: 'leonardo',
  Name: 'Leonardo',
  Description: ``,
  UploadedOn: new Date(2021, 7, 11),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 11, 5),
  },
  Event: E20210925,
  Rehomed: {
    Location: kingston,
    Date: new Date(2021, 8, 25),
  },
};
