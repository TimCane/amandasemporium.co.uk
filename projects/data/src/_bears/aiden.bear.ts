import { shepperton } from '../_locations/shepperton.location';
import { steventon } from '../_locations/steventon.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const aiden: IBear = {
  Id: 'aiden',
  Name: 'Aiden',
  Type: BearType.BearFactory,
  Rescued: {
    Location: shepperton,
    Date: new Date(2018, 10, 13),
  },
  Sold: null,
  Rehomed: {
    Location: steventon,
    Date: new Date(2018, 11, 11),
  },
};
