import { chichester } from '../_locations/chichester.location';
import { woking } from '../_locations/woking.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const roly: IBear = {
  Id: 'roly',
  Name: 'Roly',
  UploadedOn: new Date(2022, 7, 17),
  Type: BearType.BearFactory,
  Rescued: {
    Location: chichester,
    Date: new Date(2022, 4, 14),
  },
  Sold: null,
  Rehomed: {
    Location: woking,
    Date: new Date(2022, 7, 20),
  },
};
