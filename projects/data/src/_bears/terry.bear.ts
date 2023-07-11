import { E20200510 } from '../_events/E2020-05-10.event';
import { romsey } from '../_locations/romsey.location';
import { woking } from '../_locations/woking.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const terry: IBear = {
  Id: 'terry',
  Name: 'Terry',
  Description: ``,
  UploadedOn: new Date(2019, 4, 24),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: romsey,
    Date: new Date(2019, 7, 2),
  },
  Event: E20200510,
  Rehomed: {
    Location: woking,
    Date: new Date(2020, 4, 10),
  },
};
