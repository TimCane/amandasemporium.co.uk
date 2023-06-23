import { caterham } from '../_locations/caterham.location';
import { southsea } from '../_locations/southsea.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const mabel: IBear = {
  Id: 'mabel',
  Name: 'Mabel',
  UploadedOn: new Date(2019, 8, 30),
  Type: BearType.Unknown,
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 8, 1),
  },
  Sold: null,
  Rehomed: {
    Location: caterham,
    Date: new Date(2019, 9, 6),
  },
};
