import { shepperton } from '../_locations/shepperton.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const daniel: IBear = {
  Id: 'daniel',
  Name: 'Daniel',
  Description: ``,
  UploadedOn: new Date(2023, 6, 11),
  Type: {
    Type: BearTypeEnum.LBILtd,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2023, 6, 1),
  },
  Event: null,
  Rehomed: null,
};
