import { farnborough } from '../_locations/farnborough.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bert: IBear = {
  Id: 'bert',
  Name: 'Bert',
  Description: ``,
  UploadedOn: new Date(2019, 10, 22),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2019, 9, 18),
  },
  Event: null,
  Rehomed: {
    Location: farnborough,
    Date: new Date(2020, 1, 19),
  },
};
