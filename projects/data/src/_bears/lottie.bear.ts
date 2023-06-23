import { burnham } from '../_locations/burnham.location';
import { portsmouth } from '../_locations/portsmouth.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const lottie: IBear = {
  Id: 'lottie',
  Name: 'Lottie',
  UploadedOn: new Date(2019, 4, 27),
  Type: BearType.BuildABear,
  Rescued: {
    Location: portsmouth,
    Date: new Date(2019, 4, 19),
  },
  Sold: null,
  Rehomed: {
    Location: burnham,
    Date: new Date(2019, 4, 25),
  },
};
