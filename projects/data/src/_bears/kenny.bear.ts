import { chertsey } from '../_locations/chertsey.location';
import { taplow } from '../_locations/taplow.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const kenny: IBear = {
  Id: 'kenny',
  Name: 'Kenny',
  UploadedOn: new Date(2018, 8, 30),
  Type: BearType.BuildABear,
  Rescued: {
    Location: chertsey,
    Date: new Date(2018, 6, 6),
  },
  Sold: null,
  Rehomed: {
    Location: taplow,
    Date: new Date(2019, 5, 25),
  },
};
