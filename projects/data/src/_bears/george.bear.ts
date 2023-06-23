import { E20180929 } from '../_events/E2018-09-29.event';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { surbitonNurseySchool } from '../_locations/surbitonNurseySchool.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const george: IBear = {
  Id: 'george',
  Name: 'George',
  UploadedOn: new Date(2018, 8, 30),
  Type: BearType.BuildABear,
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2018, 6, 7),
  },
  Event: E20180929,
  Rehomed: {
    Location: surbitonNurseySchool,
    Date: new Date(2018, 8, 29),
  },
};
