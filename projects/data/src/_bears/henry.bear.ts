import { shrewsbury } from '../_locations/shrewsbury.location';
import { wandsworth } from '../_locations/wandsworth.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const henry: IBear = {
  Id: 'henry',
  Name: 'Henry',
  Type: BearType.WHSmithBear,
  Rescued: {
    Location: shrewsbury,
    Date: new Date(2018, 4, 18),
  },
  Sold: null,
  Rehomed: {
    Location: wandsworth,
    Date: new Date(2018, 5, 6),
  },
};
