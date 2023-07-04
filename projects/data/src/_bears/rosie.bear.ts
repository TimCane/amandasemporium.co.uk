import { E20181111 } from '../_events/E2018-11-11.event';
import { wallingford } from '../_locations/wallingford.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const rosie: IBear = {
  Id: 'rosie',
  Name: 'Rosie',
  Description: ``,
  UploadedOn: new Date(2018, 10, 12),
  Type: {
    Type: BearTypeEnum.BearFactory,
  },
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2018, 9, 13),
  },
  Event: E20181111,
  Rehomed: {
    Location: wallingford,
    Date: new Date(2018, 10, 11),
  },
};
