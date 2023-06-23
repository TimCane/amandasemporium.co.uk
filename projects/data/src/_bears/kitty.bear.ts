import { ashford } from '../_locations/ashford.location';
import { horley } from '../_locations/horley.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const kitty: IBear = {
  Id: 'kitty',
  Name: 'Kitty',
  UploadedOn: new Date(2019, 11, 12),
  Type: BearType.BuildABear,
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 9, 24),
  },
  Sold: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2019, 11, 14),
  },
};
