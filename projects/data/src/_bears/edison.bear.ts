import { E20220820 } from '../_events/E2022-08-20.event';
import { fleet } from '../_locations/fleet.location';
import { folkstone } from '../_locations/folkstone.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const edison: IBear = {
  Id: 'edison',
  Name: 'Edison',
  Description: ``,
  UploadedOn: new Date(2021, 6, 16),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: folkstone,
    Date: new Date(2020, 9, 1),
  },
  Event: E20220820,
  Rehomed: {
    Location: fleet,
    Date: new Date(2022, 7, 20),
  },
};
