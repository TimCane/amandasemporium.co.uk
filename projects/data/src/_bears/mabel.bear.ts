import { E20191006 } from '../_events/E2019-10-06.event';
import { caterham } from '../_locations/caterham.location';
import { southsea } from '../_locations/southsea.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const mabel: IBear = {
  Id: 'mabel',
  Name: 'Mabel',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Type: {
    Type: BearTypeEnum.Unknown,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 8, 1),
  },
  Event: E20191006,
  Rehomed: {
    Location: caterham,
    Date: new Date(2019, 9, 6),
  },
};
