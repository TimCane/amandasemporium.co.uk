import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { addlestone } from '../_locations/addlestone.location';
import { horley } from '../_locations/horley.location';
import { cat } from '../_species/cat.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const tallulah: IBear = {
  Id: 'tallulah',
  Name: 'Tallulah',
  Description: ``,
  UploadedOn: new Date(2022, 10, 18),
  Info: {
    Brand: buildABear,
    Species: cat,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2022, 10, 14),
  },
  Event: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2023, 3, 22),
  },
};
