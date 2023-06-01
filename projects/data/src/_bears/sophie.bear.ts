import { horsell } from '../_locations/horsell.location';
import { ripley } from '../_locations/ripley.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const sophie: IBear = {
  Id: 'sophie',
  Name: 'Sophie',
  Type: BearType.Unknown,
  Rescued: {
    Location: horsell,
    Date: new Date(2018, 9, 29),
  },
  Sold: null,
  Rehomed: {
    Location: ripley,
    Date: new Date(2018, 12, 2),
  },
};
