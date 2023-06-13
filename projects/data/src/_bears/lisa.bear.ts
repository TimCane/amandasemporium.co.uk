import { haylingIsland } from '../_locations/haylingIsland.location';
import { horsley } from '../_locations/horsley.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const lisa: IBear = {
  Id: 'lisa',
  Name: 'Lisa',
  Type: BearType.CuddlesCollection,
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2019, 10, 12),
  },
  Sold: null,
  Rehomed: {
    Location: horsley,
    Date: new Date(2019, 12, 1),
  },
};
