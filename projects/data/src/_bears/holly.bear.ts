import { egham } from '../_locations/egham.location';
import { leicester } from '../_locations/leicester.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const holly: IBear = {
  Id: 'holly',
  Name: 'Holly',
  Type: BearType.BuildABear,
  Rescued: {
    Location: egham,
    Date: new Date(2018, 11, 26),
  },
  Sold: null,
  Rehomed: {
    Location: leicester,
    Date: new Date(2018, 12, 2),
  },
};
