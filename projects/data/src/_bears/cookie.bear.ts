import { billingshurst } from '../_locations/billingshurst.location';
import { chicester } from '../_locations/chicester.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const cookie: IBear = {
  Id: 'cookie',
  Name: 'Cookie',
  UploadedOn: new Date(2019, 9, 7),
  Type: BearType.BuildABear,
  Rescued: {
    Location: chicester,
    Date: new Date(2019, 7, 3),
  },
  Sold: null,
  Rehomed: {
    Location: billingshurst,
    Date: new Date(2019, 9, 6),
  },
};
