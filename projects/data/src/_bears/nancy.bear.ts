import { farnborough } from '../_locations/farnborough.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const nancy: IBear = {
  Id: 'nancy',
  Name: 'Nancy',
  Description: ``,
  UploadedOn: new Date(2021, 9, 7),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2021, 8, 12),
  },
  Event: null,
  Rehomed: {
    Location: farnborough,
    Date: new Date(2021, 10, 20),
  },
};
