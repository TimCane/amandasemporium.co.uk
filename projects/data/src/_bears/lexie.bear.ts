import { E20220820 } from '../_events/E2022-08-20.event';
import { fleet } from '../_locations/fleet.location';
import { selsey } from '../_locations/selsey.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const lexie: IBear = {
  Id: 'lexie',
  Name: 'Lexie',
  UploadedOn: new Date(2022, 7, 17),
  Type: BearType.BuildABear,
  Rescued: {
    Location: selsey,
    Date: new Date(2022, 4, 28),
  },
  Event: E20220820,
  Rehomed: {
    Location: fleet,
    Date: new Date(2022, 7, 20),
  },
};
