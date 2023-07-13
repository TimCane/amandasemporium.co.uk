import { birthdays } from '../_bear-brands/birthdays.bear-brand';
import { bracknell } from '../_locations/bracknell.location';
import { ottershaw } from '../_locations/ottershaw.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const jr: IBear = {
  Id: 'jr',
  Name: 'Jr',
  Description: ``,
  UploadedOn: new Date(2022, 2, 1),
  Info: {
    Brand: birthdays,
    Species: bear,
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
