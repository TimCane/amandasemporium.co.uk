import { farlington } from '../_locations/farlington.location';
import { godalming } from '../_locations/godalming.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const anna: IBear = {
  Id: 'anna',
  Name: 'Anna',
  UploadedOn: new Date(2019, 4, 31),
  Type: BearType.BuildABear,
  Rescued: {
    Location: farlington,
    Date: new Date(2019, 5, 25),
  },
  Sold: null,
  Rehomed: {
    Location: godalming,
    Date: new Date(2019, 9, 21),
  },
};
