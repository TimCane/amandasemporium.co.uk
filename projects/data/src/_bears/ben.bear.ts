import { hammersmith } from '../_locations/hammersmith.location';
import { horsham } from '../_locations/horsham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const ben: IBear = {
  Id: 'ben',
  Name: 'Ben',
  Type: BearType.Unknown,
  Rescued: {
    Location: hammersmith,
    Date: new Date(2018, 9, 14),
  },
  Sold: null,
  Rehomed: {
    Location: horsham,
    Date: new Date(2019, 7, 14),
  },
};
