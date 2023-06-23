import { hammersmith } from '../_locations/hammersmith.location';
import { horsham } from '../_locations/horsham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const ben: IBear = {
  Id: 'ben',
  Name: 'Ben',
  UploadedOn: new Date(2018, 10, 24),
  Type: BearType.Unknown,
  Rescued: {
    Location: hammersmith,
    Date: new Date(2018, 8, 14),
  },
  Event: null,
  Rehomed: {
    Location: horsham,
    Date: new Date(2019, 6, 14),
  },
};
