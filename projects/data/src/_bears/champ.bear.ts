import { binfield } from '../_locations/binfield.location';
import { bracknell } from '../_locations/bracknell.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const champ: IBear = {
  Id: 'champ',
  Name: 'Champ',
  Type: BearType.BuildABear,
  Rescued: {
    Location: binfield,
    Date: new Date(2020, 2, 8),
  },
  Sold: null,
  Rehomed: {
    Location: bracknell,
    Date: new Date(2021, 7, 31),
  },
};
