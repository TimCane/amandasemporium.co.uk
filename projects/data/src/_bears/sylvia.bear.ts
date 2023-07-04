import { E20221120 } from '../_events/E2022-11-20.event';
import { andover } from '../_locations/andover.location';
import { pagham } from '../_locations/pagham.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const sylvia: IBear = {
  Id: 'sylvia',
  Name: 'Sylvia',
  UploadedOn: new Date(2022, 10, 8),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: pagham,
    Date: new Date(2022, 8, 17),
  },
  Event: E20221120,
  Rehomed: {
    Location: andover,
    Date: new Date(2022, 10, 20),
  },
};
