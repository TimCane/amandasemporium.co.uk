import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { addlestone } from '../_locations/addlestone.location';
import { horley } from '../_locations/horley.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const lucas: IBear = {
  Id: 'lucas',
  Name: 'Lucas',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2022, 5, 14),
  },
  Event: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2023, 3, 22),
  },
};
