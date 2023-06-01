import { haylingIsland } from '../_locations/haylingIsland.location';
import { surbitonNurseySchool } from '../_locations/surbitonNurseySchool.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const george: IBear = {
  Id: 'george',
  Name: 'George',
  Type: BearType.BuildABear,
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2018, 7, 7),
  },
  Sold: null,
  Rehomed: {
    Location: surbitonNurseySchool,
    Date: new Date(2018, 9, 29),
  },
};
