import { seaford } from '../_locations/seaford.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const petal: IBear = {
  Id: 'petal',
  Name: 'Petal',
  Description: ``,
  UploadedOn: new Date(2023, 5, 20),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: seaford,
    Date: new Date(2023, 5, 11),
  },
  Event: null,
  Rehomed: null,
};
