import { bracknell } from '../_locations/bracknell.location';
import { ottershaw } from '../_locations/ottershaw.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const jr: IBear = {
  Id: 'jr',
  Name: 'Jr',
  UploadedOn: new Date(2022, 2, 1),
  Type: BearType.BirthdaysBear,
  Rescued: {
    Location: bracknell,
    Date: new Date(2021, 9, 9),
  },
  Sold: null,
  Rehomed: {
    Location: ottershaw,
    Date: new Date(2022, 2, 1),
  },
};
