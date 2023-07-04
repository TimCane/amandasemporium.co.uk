import { E20181202 } from '../_events/E2018-12-02.event';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { send } from '../_locations/send.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const lucy: IBear = {
  Id: 'lucy',
  Name: 'Lucy',
  Description: ``,
  UploadedOn: new Date(2018, 10, 12),
  Type: {
    Type: BearTypeEnum.KeelTeddybear,
  },
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2018, 9, 13),
  },
  Event: E20181202,
  Rehomed: {
    Location: send,
    Date: new Date(2018, 11, 2),
  },
};
