import { surbiton } from '../_locations/surbiton.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const charlotte: IBear = {
  Id: 'charlotte',
  Name: 'Charlotte',
  UploadedOn: new Date(2019, 6, 18),
  Type: BearType.GloriousBritianBear,
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2019, 5, 29),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2019, 9, 28),
  },
};
