import { inifiniteDesigns } from '../_bear-brands/inifinite-designs.bear-brand';
import { E20210814 } from '../_events/E2021-08-14.event';
import { farnham } from '../_locations/farnham.location';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const ginny: IBear = {
  Id: 'ginny',
  Name: 'Ginny',
  Description: ``,
  UploadedOn: new Date(2019, 10, 22),
  Info: {
    Brand: inifiniteDesigns,
    Species: bear,
  },
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2019, 9, 12),
  },
  Event: E20210814,
  Rehomed: {
    Location: farnham,
    Date: new Date(2021, 7, 14),
  },
};
