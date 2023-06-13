import { ely } from '../_locations/ely.location';
import { horley } from '../_locations/horley.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const flossie: IBear = {
  Id: 'flossie',
  Name: 'Flossie',
  Type: BearType.BuildABear,
  Rescued: {
    Location: ely,
    Date: new Date(2021, 8, 19),
  },
  Sold: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2022, 4, 23),
  },
};
