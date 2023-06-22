import { addlestone } from '../_locations/addlestone.location';
import { horley } from '../_locations/horley.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const lucas: IBear = {
  Id: 'lucas',
  Name: 'Lucas',
  Type: BearType.BuildABear,
  Rescued: {
    Location: addlestone,
    Date: new Date(2022, 6, 14),
  },
  Sold: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2023, 3, 22),
  },
};
