import { E20181110 } from '../_events/E2018-11-10.event';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { reading } from '../_locations/reading.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const clara: IBear = {
  Id: 'clara',
  Name: 'Clara',
  UploadedOn: new Date(2018, 10, 12),
  Type: BearType.KeelTeddybear,
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2018, 9, 13),
  },
  Event: E20181110,
  Rehomed: {
    Location: reading,
    Date: new Date(2018, 10, 10),
  },
};
