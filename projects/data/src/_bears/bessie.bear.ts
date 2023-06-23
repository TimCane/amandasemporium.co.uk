import { basingstoke } from '../_locations/basingstoke.location';
import { weybridge } from '../_locations/weybridge.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bessie: IBear = {
  Id: 'bessie',
  Name: 'Bessie',
  UploadedOn: new Date(2019, 4, 31),
  Type: BearType.KeelTeddybear,
  Rescued: {
    Location: weybridge,
    Date: new Date(2019, 1, 23),
  },
  Sold: null,
  Rehomed: {
    Location: basingstoke,
    Date: new Date(2019, 7, 17),
  },
};
