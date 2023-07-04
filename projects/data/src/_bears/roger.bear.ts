import { E20230625 } from '../_events/E2023-06-25.event';
import { ruislip } from '../_locations/ruislip.location';
import { thatcham } from '../_locations/thatcham.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const roger: IBear = {
  Id: 'roger',
  Name: 'Roger',
  Description: ``,
  UploadedOn: new Date(2023, 4, 30),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: ruislip,
    Date: new Date(2022, 9, 17),
  },
  Event: E20230625,
  Rehomed: {
    Date: new Date(2023, 5, 25),
    Location: thatcham,
  },
};
