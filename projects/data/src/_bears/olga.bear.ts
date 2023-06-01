import { cobham } from '../_locations/cobham.location';
import { epsom } from '../_locations/epsom.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const olga: IBear = {
  Id: 'olga',
  Name: 'Olga',
  Type: BearType.BuildABear,
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 12, 5),
  },
  Sold: null,
  Rehomed: {
    Location: epsom,
    Date: new Date(2021, 12, 5),
  },
};
