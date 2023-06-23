import { burnham } from '../_locations/burnham.location';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bella: IBear = {
  Id: 'bella',
  Name: 'Bella',
  UploadedOn: new Date(2018, 3, 29),
  Type: BearType.KeelTeddybear,
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2018, 2, 31),
  },
  Sold: null,
  Rehomed: {
    Location: burnham,
    Date: new Date(2019, 4, 25),
  },
};
