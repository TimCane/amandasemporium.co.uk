import { nottingham } from '../_locations/nottingham.location';
import { pagham } from '../_locations/pagham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const shelby: IBear = {
  Id: 'shelby',
  Name: 'Shelby',
  Type: BearType.BuildABear,
  Rescued: {
    Location: pagham,
    Date: new Date(2022, 8, 17),
  },
  Sold: null,
  Rehomed: {
    Location: nottingham,
    Date: new Date(2023, 5, 17),
  },
};
