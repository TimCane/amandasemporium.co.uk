import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { addlestone } from '../_locations/addlestone.location';
import { horley } from '../_locations/horley.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const topsy: IBear = {
  Id: 'topsy',
  Name: 'Topsy',
  Description: ``,
  UploadedOn: new Date(2022, 11, 9),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2022, 10, 25),
  },
  Event: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2023, 3, 22),
  },
};
