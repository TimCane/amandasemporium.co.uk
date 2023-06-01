import { cobham } from '../_locations/cobham.location';
import { wokingham } from '../_locations/wokingham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bonnie: IBear = {
  Id: 'bonnie',
  Name: 'Bonnie',
  Type: BearType.BearFactory,
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 12, 5),
  },
  Sold: null,
  Rehomed: {
    Location: wokingham,
    Date: new Date(2021, 7, 31),
  },
};
