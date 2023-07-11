import { ascot } from '../_locations/ascot.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const isaac: IBear = {
  Id: 'isaac',
  Name: 'Isaac',
  Description: ``,
  UploadedOn: new Date(2023, 6, 11),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: ascot,
    Date: new Date(2022, 2, 3),
  },
  Event: null,
  Rehomed: null,
};
