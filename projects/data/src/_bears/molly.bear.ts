import { chertsey } from '../_locations/chertsey.location';
import { tadley } from '../_locations/tadley.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const molly: IBear = {
  Id: 'molly',
  Name: 'Molly',
  UploadedOn: new Date(2018, 11, 3),
  Type: BearType.BuildABear,
  Rescued: {
    Location: chertsey,
    Date: new Date(2018, 10, 26),
  },
  Sold: null,
  Rehomed: {
    Location: tadley,
    Date: new Date(2019, 5, 2),
  },
};
