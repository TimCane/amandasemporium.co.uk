import { haylingIsland } from '../_locations/haylingIsland.location';
import { send } from '../_locations/send.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const phoebe: IBear = {
  Id: 'phoebe',
  Name: 'Phoebe',
  Type: BearType.Unknown,
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2018, 7, 7),
  },
  Sold: null,
  Rehomed: {
    Location: send,
    Date: new Date(2018, 12, 2),
  },
};
