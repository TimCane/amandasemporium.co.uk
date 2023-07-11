import { E20210925 } from '../_events/E2021-09-25.event';
import { aldershot } from '../_locations/aldershot.location';
import { ashford } from '../_locations/ashford.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const loren: IBear = {
  Id: 'loren',
  Name: 'Loren',
  Description: ``,
  UploadedOn: new Date(2021, 6, 16),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Rabbit,
  },
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 9, 24),
  },
  Event: E20210925,
  Rehomed: {
    Location: aldershot,
    Date: new Date(2021, 8, 25),
  },
};
