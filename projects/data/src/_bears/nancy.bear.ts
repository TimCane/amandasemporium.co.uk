import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { farnborough } from '../_locations/farnborough.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const nancy: IBear = {
  Id: 'nancy',
  Name: 'Nancy',
  Description: ``,
  UploadedOn: new Date(2021, 9, 7),
  Info: {
    Brand: buildABear,
    Species: bear,
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
