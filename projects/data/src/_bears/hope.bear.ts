import { camberley } from '../_locations/camberley.location';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const hope: IBear = {
  Id: 'hope',
  Name: 'Hope',
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
  Event: null,
  Rehomed: {
    Location: camberley,
    Date: new Date(2018, 10, 17),
  },
};
