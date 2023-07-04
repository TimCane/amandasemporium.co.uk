import { E20221127 } from '../_events/E2022-11-27.event';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { odiham } from '../_locations/odiham.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const honey: IBear = {
  Id: 'honey',
  Name: 'Honey',
  UploadedOn: new Date(2022, 10, 8),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2022, 8, 23),
  },
  Event: E20221127,
  Rehomed: {
    Location: odiham,
    Date: new Date(2022, 10, 27),
  },
};
