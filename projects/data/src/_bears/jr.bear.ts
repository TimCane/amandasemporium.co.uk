import { bracknell } from '../_locations/bracknell.location';
import { ottershaw } from '../_locations/ottershaw.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const jr: IBear = {
  Id: 'jr',
  Name: 'Jr',
  Description: ``,
  UploadedOn: new Date(2022, 2, 1),
  Type: {
    Type: BearTypeEnum.BirthdaysBear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: bracknell,
    Date: new Date(2021, 9, 9),
  },
  Event: null,
  Rehomed: {
    Location: ottershaw,
    Date: new Date(2022, 2, 1),
  },
};
