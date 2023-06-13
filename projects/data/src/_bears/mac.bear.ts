import { cobham } from '../_locations/cobham.location';
import { horley } from '../_locations/horley.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const mac: IBear = {
  Id: 'mac',
  Name: 'Mac',
  Type: BearType.BuildABear,
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 12, 5),
  },
  Sold: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2019, 12, 14),
  },
};
