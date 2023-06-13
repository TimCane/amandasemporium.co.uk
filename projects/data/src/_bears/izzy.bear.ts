import { guildford } from '../_locations/guildford.location';
import { titchfield } from '../_locations/titchfield.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const izzy: IBear = {
  Id: 'izzy',
  Name: 'Izzy',
  Type: BearType.BuildABear,
  Rescued: {
    Location: titchfield,
    Date: new Date(2019, 8, 25),
  },
  Sold: null,
  Rehomed: {
    Location: guildford,
    Date: new Date(2019, 11, 30),
  },
};
