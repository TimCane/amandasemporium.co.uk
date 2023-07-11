import { E20191006 } from '../_events/E2019-10-06.event';
import { oswestry } from '../_locations/oswestry.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const annie: IBear = {
  Id: 'annie',
  Name: 'Annie',
  Description: ``,
  UploadedOn: new Date(2019, 6, 18),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2019, 4, 29),
  },
  Event: E20191006,
  Rehomed: {
    Location: oswestry,
    Date: new Date(2019, 9, 6),
  },
};
