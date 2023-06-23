import { newbury } from '../_locations/newbury.location';
import { ripley } from '../_locations/ripley.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const stan: IBear = {
  Id: 'stan',
  Name: 'Stan',
  UploadedOn: new Date(2018, 8, 30),
  Type: BearType.BuildABear,
  Rescued: {
    Location: ripley,
    Date: new Date(2018, 6, 10),
  },
  Sold: null,
  Rehomed: {
    Location: newbury,
    Date: new Date(2018, 4, 22),
  },
};
