import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20180929 } from '../_events/E2018-09-29.event';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { surbitonNurseySchool } from '../_locations/surbitonNurseySchool.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const george: IBear = {
  Id: 'george',
  Name: 'George',
  Description: ``,
  UploadedOn: new Date(2018, 8, 30),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2018, 6, 7),
  },
  Event: E20180929,
  Rehomed: {
    Location: surbitonNurseySchool,
    Date: new Date(2018, 8, 29),
  },
};
