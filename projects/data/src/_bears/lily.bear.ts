import { chichester } from '../_locations/chichester.location';
import { tidworth } from '../_locations/tidworth.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const lily: IBear = {
  Id: 'lily',
  Name: 'Lily',
  UploadedOn: new Date(2022, 10, 8),
  Type: BearType.BuildABear,
  Rescued: {
    Location: chichester,
    Date: new Date(2022, 6, 3),
  },
  Sold: null,
  Rehomed: {
    Location: tidworth,
    Date: new Date(2022, 10, 20),
  },
};
