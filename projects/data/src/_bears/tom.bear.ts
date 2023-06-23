import { leeds } from '../_locations/leeds.location';
import { titchfield } from '../_locations/titchfield.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const tom: IBear = {
  Id: 'tom',
  Name: 'Tom',
  UploadedOn: new Date(2019, 8, 9),
  Type: BearType.BuildABear,
  Rescued: {
    Location: titchfield,
    Date: new Date(2019, 7, 25),
  },
  Sold: null,
  Rehomed: {
    Location: leeds,
    Date: new Date(2019, 8, 28),
  },
};
