import { churchCrookham } from '../_locations/churchCrookham.location';
import { crowborough } from '../_locations/crowborough.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const sunny: IBear = {
  Id: 'sunny',
  Name: 'Sunny',
  UploadedOn: new Date(2022, 7, 17),
  Type: BearType.BuildABear,
  Rescued: {
    Location: crowborough,
    Date: new Date(2022, 4, 26),
  },
  Sold: null,
  Rehomed: {
    Location: churchCrookham,
    Date: new Date(2022, 8, 20),
  },
};
