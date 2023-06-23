import { ashford } from '../_locations/ashford.location';
import { bracknell } from '../_locations/bracknell.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const rowan: IBear = {
  Id: 'rowan',
  Name: 'Rowan',
  UploadedOn: new Date(2019, 3, 7),
  Type: BearType.BuildABear,
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 1, 8),
  },
  Sold: null,
  Rehomed: {
    Location: bracknell,
    Date: new Date(2019, 4, 20),
  },
};
