import { bridgemary } from '../_locations/bridgemary.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const james: IBear = {
  Id: 'james',
  Name: 'James',
  UploadedOn: new Date(2019, 6, 18),
  Type: BearType.RussBear,
  Rescued: {
    Location: bridgemary,
    Date: new Date(2019, 6, 2),
  },
  Sold: null,
  Rehomed: {
    Location: waltonUponThames,
    Date: new Date(2021, 9, 25),
  },
};
