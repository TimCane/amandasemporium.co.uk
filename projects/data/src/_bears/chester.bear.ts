import { funtastic } from '../_bear-brands/funtastic.bear-brand';
import { E20190928 } from '../_events/E2019-09-28.event';
import { hailsham } from '../_locations/hailsham.location';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { dog } from '../_bear-species/dog.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const chester: IBear = {
  Id: 'chester',
  Name: 'Chester',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Info: {
    Brand: funtastic,
    Species: dog,
  },
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2019, 8, 1),
  },
  Event: E20190928,
  Rehomed: {
    Location: hailsham,
    Date: new Date(2019, 8, 28),
  },
};
