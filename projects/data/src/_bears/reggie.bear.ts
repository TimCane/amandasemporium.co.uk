import { reading } from '../_locations/reading.location';
import { southsea } from '../_locations/southsea.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const reggie: IBear = {
  Id: 'reggie',
  Name: 'Reggie',
  UploadedOn: new Date(2018, 10, 12),
  Type: BearType.BuildABear,
  Rescued: {
    Location: southsea,
    Date: new Date(2018, 9, 2),
  },
  Sold: null,
  Rehomed: {
    Location: reading,
    Date: new Date(2018, 11, 10),
  },
};
