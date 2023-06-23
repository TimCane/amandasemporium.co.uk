import { cobham } from '../_locations/cobham.location';
import { knaphill } from '../_locations/knaphill.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bradley: IBear = {
  Id: 'bradley',
  Name: 'Bradley',
  UploadedOn: new Date(2019, 11, 12),
  Type: BearType.BuildABear,
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 12, 5),
  },
  Sold: null,
  Rehomed: {
    Location: knaphill,
    Date: new Date(2022, 11, 4),
  },
};
