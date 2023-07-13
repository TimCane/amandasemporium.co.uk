import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { blackwater } from '../_locations/blackwater.location';
import { horley } from '../_locations/horley.location';
import { rabbit } from '../_bear-species/rabbit.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const ariel: IBear = {
  Id: 'ariel',
  Name: 'Ariel',
  Description: ``,
  UploadedOn: new Date(2022, 3, 24),
  Info: {
    Brand: buildABear,
    Species: rabbit,
  },
  Rescued: {
    Location: blackwater,
    Date: new Date(2022, 0, 29),
  },
  Event: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2022, 3, 23),
  },
};
