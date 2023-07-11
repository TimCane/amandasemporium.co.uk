import { E20210731 } from '../_events/E2021-07-31.event';
import { binfield } from '../_locations/binfield.location';
import { bracknell } from '../_locations/bracknell.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const champ: IBear = {
  Id: 'champ',
  Name: 'Champ',
  Description: ``,
  UploadedOn: new Date(2021, 6, 16),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: binfield,
    Date: new Date(2020, 1, 8),
  },
  Event: E20210731,
  Rehomed: {
    Location: bracknell,
    Date: new Date(2021, 6, 31),
  },
};
