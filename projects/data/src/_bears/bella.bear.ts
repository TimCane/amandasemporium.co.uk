import { E20190525 } from '../_events/E2019-05-25.event';
import { burnham } from '../_locations/burnham.location';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bella: IBear = {
  Id: 'bella',
  Name: 'Bella',
  Description: ``,
  UploadedOn: new Date(2018, 3, 29),
  Type: {
    Type: BearTypeEnum.KeelTeddybear,
  },
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2018, 2, 31),
  },
  Event: E20190525,
  Rehomed: {
    Location: burnham,
    Date: new Date(2019, 4, 25),
  },
};
