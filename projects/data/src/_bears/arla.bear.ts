import { bosham } from '../_locations/bosham.location';
import { horley } from '../_locations/horley.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const arla: IBear = {
  Id: 'arla',
  Name: 'Arla',
  Description: ``,
  UploadedOn: new Date(2022, 11, 2),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: bosham,
    Date: new Date(2022, 6, 10),
  },
  Event: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2023, 3, 22),
  },
};
