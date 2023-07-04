import { E20210814 } from '../_events/E2021-08-14.event';
import { farnham } from '../_locations/farnham.location';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const ginny: IBear = {
  Id: 'ginny',
  Name: 'Ginny',
  UploadedOn: new Date(2019, 10, 22),
  Type: {
    Type: BearTypeEnum.InifiniteDesigns,
  },
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2019, 9, 12),
  },
  Event: E20210814,
  Rehomed: {
    Location: farnham,
    Date: new Date(2021, 7, 14),
  },
};
