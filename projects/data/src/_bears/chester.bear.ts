import { hailsham } from '../_locations/hailsham.location';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const chester: IBear = {
  Id: 'chester',
  Name: 'Chester',
  UploadedOn: new Date(2019, 8, 30),
  Type: BearType.Funtastic,
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2019, 9, 1),
  },
  Sold: null,
  Rehomed: {
    Location: hailsham,
    Date: new Date(2019, 9, 28),
  },
};
