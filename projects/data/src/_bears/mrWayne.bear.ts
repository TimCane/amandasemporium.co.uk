import { haylingIsland } from '../_locations/haylingIsland.location';
import { horley } from '../_locations/horley.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const mrWayne: IBear = {
  Id: 'mr-wayne',
  Name: 'Mr Wayne',
  Description: ``,
  UploadedOn: new Date(2021, 9, 7),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2021, 7, 29),
  },
  Event: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2022, 3, 23),
  },
};
