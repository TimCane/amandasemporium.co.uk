import { E20230625 } from '../_events/E2023-06-25.event';
import { chichester } from '../_locations/chichester.location';
import { thatcham } from '../_locations/thatcham.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const billy: IBear = {
  Id: 'billy',
  Name: 'Billy',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: chichester,
    Date: new Date(2022, 4, 14),
  },
  Event: E20230625,
  Rehomed: {
    Date: new Date(2023, 5, 25),
    Location: thatcham,
  },
};
