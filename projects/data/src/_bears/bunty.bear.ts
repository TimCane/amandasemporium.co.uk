import { horsley } from '../_locations/horsley.location';
import { tonbridge } from '../_locations/tonbridge.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bunty: IBear = {
  Id: 'bunty',
  Name: 'Bunty',
  Type: BearType.KeelTeddybear,
  Rescued: {
    Location: tonbridge,
    Date: new Date(2019, 9, 13),
  },
  Sold: null,
  Rehomed: {
    Location: horsley,
    Date: new Date(2019, 12, 1),
  },
};
