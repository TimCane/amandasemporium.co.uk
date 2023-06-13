import { newbury } from '../_locations/newbury.location';
import { richmond } from '../_locations/richmond.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const heather: IBear = {
  Id: 'heather',
  Name: 'Heather',
  Type: BearType.Unknown,
  Rescued: {
    Location: newbury,
    Date: new Date(2021, 10, 8),
  },
  Sold: null,
  Rehomed: {
    Location: richmond,
    Date: new Date(2022, 9, 24),
  },
};
