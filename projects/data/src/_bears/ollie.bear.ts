import { farnborough } from '../_locations/farnborough.location';
import { ripley } from '../_locations/ripley.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const ollie: IBear = {
  Id: 'ollie',
  Name: 'Ollie',
  Type: BearType.BuildABear,
  Rescued: {
    Location: ripley,
    Date: new Date(2018, 6, 10),
  },
  Sold: null,
  Rehomed: {
    Location: farnborough,
    Date: new Date(2019, 8, 17),
  },
};
