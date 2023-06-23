import { billingshurst } from '../_locations/billingshurst.location';
import { southsea } from '../_locations/southsea.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const david: IBear = {
  Id: 'david',
  Name: 'David',
  UploadedOn: new Date(2019, 8, 9),
  Type: BearType.BuildABear,
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 6, 2),
  },
  Sold: null,
  Rehomed: {
    Location: billingshurst,
    Date: new Date(2019, 10, 6),
  },
};
