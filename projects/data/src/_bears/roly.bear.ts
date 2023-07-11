import { E20220820 } from '../_events/E2022-08-20.event';
import { chichester } from '../_locations/chichester.location';
import { woking } from '../_locations/woking.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const roly: IBear = {
  Id: 'roly',
  Name: 'Roly',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Type: {
    Type: BearTypeEnum.BearFactory,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: chichester,
    Date: new Date(2022, 4, 14),
  },
  Event: E20220820,
  Rehomed: {
    Location: woking,
    Date: new Date(2022, 7, 20),
  },
};
