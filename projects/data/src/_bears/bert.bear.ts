import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { farnborough } from '../_locations/farnborough.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const bert: IBear = {
  Id: 'bert',
  Name: 'Bert',
  Description: ``,
  UploadedOn: new Date(2019, 10, 22),
  Info: {
    Brand: buildABear,
    Species: bear,
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
