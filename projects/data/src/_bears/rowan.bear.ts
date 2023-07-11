import { ashford } from '../_locations/ashford.location';
import { bracknell } from '../_locations/bracknell.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const rowan: IBear = {
  Id: 'rowan',
  Name: 'Rowan',
  Description: ``,
  UploadedOn: new Date(2019, 3, 7),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 0, 8),
  },
  Event: null,
  Rehomed: {
    Location: bracknell,
    Date: new Date(2019, 3, 20),
  },
};
