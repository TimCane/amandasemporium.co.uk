import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { windsor } from '../_locations/windsor.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const nobbie: IBear = {
  Id: 'nobbie',
  Name: 'Nobbie',
  UploadedOn: new Date(2018, 3, 29),
  Type: BearType.RussBear,
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2018, 3, 4),
  },
  Sold: null,
  Rehomed: {
    Location: windsor,
    Date: new Date(2018, 3, 8),
  },
};
