import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { normandy } from '../_locations/normandy.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const rory: IBear = {
  Id: 'rory',
  Name: 'Rory',
  Description: ``,
  UploadedOn: new Date(2018, 10, 12),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2018, 9, 13),
  },
  Event: null,
  Rehomed: {
    Location: normandy,
    Date: new Date(2018, 10, 17),
  },
};
