import { E20220820 } from '../_events/E2022-08-20.event';
import { fleet } from '../_locations/fleet.location';
import { selsey } from '../_locations/selsey.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const lexie: IBear = {
  Id: 'lexie',
  Name: 'Lexie',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
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
