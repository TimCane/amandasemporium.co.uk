import { haylingIsland } from '../_locations/haylingIsland.location';
import { send } from '../_locations/send.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const lucy: IBear = {
  Id: 'lucy',
  Name: 'Lucy',
  Type: BearType.KeelTeddybear,
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2018, 10, 13),
  },
  Sold: null,
  Rehomed: {
    Location: send,
    Date: new Date(2018, 12, 2),
  },
};
