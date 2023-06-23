import { crowborough } from '../_locations/crowborough.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const albert: IBear = {
  Id: 'albert',
  Name: 'Albert',
  UploadedOn: new Date(2022, 7, 17),
  Type: BearType.BuildABear,
  Rescued: {
    Location: crowborough,
    Date: new Date(2022, 4, 26),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 9, 24),
  },
};
