import { haylingIsland } from '../_locations/haylingIsland.location';
import { horley } from '../_locations/horley.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

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
