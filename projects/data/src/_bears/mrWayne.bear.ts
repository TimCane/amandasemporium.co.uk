import { haylingIsland } from '../_locations/haylingIsland.location';
import { horley } from '../_locations/horley.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const mrWayne: IBear = {
  Id: 'mr-wayne',
  Name: 'Mr Wayne',
  UploadedOn: new Date(2021, 9, 7),
  Type: BearType.BuildABear,
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2021, 8, 29),
  },
  Sold: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2022, 4, 23),
  },
};
