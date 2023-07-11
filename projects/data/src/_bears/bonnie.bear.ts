import { E20210731 } from '../_events/E2021-07-31.event';
import { cobham } from '../_locations/cobham.location';
import { wokingham } from '../_locations/wokingham.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bonnie: IBear = {
  Id: 'bonnie',
  Name: 'Bonnie',
  Description: ``,
  UploadedOn: new Date(2019, 11, 12),
  Type: {
    Type: BearTypeEnum.BearFactory,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 11, 5),
  },
  Event: E20210731,
  Rehomed: {
    Location: wokingham,
    Date: new Date(2021, 6, 31),
  },
};
