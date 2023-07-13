import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { camberley } from '../_locations/camberley.location';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

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
