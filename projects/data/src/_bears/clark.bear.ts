import { hurley } from '../_locations/hurley.location';
import { weybridge } from '../_locations/weybridge.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const clark: IBear = {
  Id: 'clark',
  Name: 'Clark',
  UploadedOn: new Date(2019, 3, 7),
  Type: BearType.Unknown,
  Rescued: {
    Location: weybridge,
    Date: new Date(2018, 12, 20),
  },
  Sold: null,
  Rehomed: {
    Location: hurley,
    Date: new Date(2019, 4, 13),
  },
};
