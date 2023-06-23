import { farnborough } from '../_locations/farnborough.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bert: IBear = {
  Id: 'bert',
  Name: 'Bert',
  UploadedOn: new Date(2019, 10, 22),
  Type: BearType.BuildABear,
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
