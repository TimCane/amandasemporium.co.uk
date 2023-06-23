import { farnham } from '../_locations/farnham.location';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const ginny: IBear = {
  Id: 'ginny',
  Name: 'Ginny',
  UploadedOn: new Date(2019, 10, 22),
  Type: BearType.InifiniteDesigns,
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2019, 9, 12),
  },
  Sold: null,
  Rehomed: {
    Location: farnham,
    Date: new Date(2021, 7, 14),
  },
};
