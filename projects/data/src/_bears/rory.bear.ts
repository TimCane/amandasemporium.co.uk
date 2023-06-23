import { normandy } from '../_locations/normandy.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const rory: IBear = {
  Id: 'rory',
  Name: 'Rory',
  UploadedOn: new Date(2018, 10, 12),
  Type: BearType.BuildABear,
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
