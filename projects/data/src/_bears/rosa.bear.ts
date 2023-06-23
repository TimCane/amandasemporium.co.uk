import { farnborough } from '../_locations/farnborough.location';
import { southsea } from '../_locations/southsea.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const rosa: IBear = {
  Id: 'rosa',
  Name: 'Rosa',
  UploadedOn: new Date(2019, 8, 9),
  Type: BearType.BuildABear,
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 5, 2),
  },
  Sold: null,
  Rehomed: {
    Location: farnborough,
    Date: new Date(2020, 9, 17),
  },
};
