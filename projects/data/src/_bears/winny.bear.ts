import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20181109 } from '../_events/E2018-11-09.event';
import { shepperton } from '../_locations/shepperton.location';
import { theale } from '../_locations/theale.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const winny: IBear = {
  Id: 'winny',
  Name: 'Winny',
  Description: ``,
  UploadedOn: new Date(2018, 10, 12),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2018, 8, 8),
  },
  Event: E20181109,
  Rehomed: {
    Location: theale,
    Date: new Date(2018, 10, 9),
  },
};
