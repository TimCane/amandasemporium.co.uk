import { E20221127 } from '../_events/E2022-11-27.event';
import { hook } from '../_locations/hook.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const maya: IBear = {
  Id: 'maya',
  Name: 'Maya',
  Description: ``,
  UploadedOn: new Date(2019, 10, 22),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2019, 9, 18),
  },
  Event: E20221127,
  Rehomed: {
    Location: hook,
    Date: new Date(2022, 10, 27),
  },
};
