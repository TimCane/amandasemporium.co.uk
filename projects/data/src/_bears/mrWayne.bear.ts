import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { horley } from '../_locations/horley.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const mrWayne: IBear = {
  Id: 'mr-wayne',
  Name: 'Mr Wayne',
  Description: ``,
  UploadedOn: new Date(2021, 9, 7),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2021, 7, 29),
  },
  Event: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2022, 3, 23),
  },
};
