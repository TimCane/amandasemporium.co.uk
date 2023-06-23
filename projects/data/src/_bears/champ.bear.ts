import { binfield } from '../_locations/binfield.location';
import { bracknell } from '../_locations/bracknell.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const champ: IBear = {
  Id: 'champ',
  Name: 'Champ',
  UploadedOn: new Date(2021, 6, 16),
  Type: BearType.BuildABear,
  Rescued: {
    Location: binfield,
    Date: new Date(2020, 1, 8),
  },
  Sold: null,
  Rehomed: {
    Location: bracknell,
    Date: new Date(2021, 6, 31),
  },
};
