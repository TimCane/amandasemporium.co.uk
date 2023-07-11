import { E20181111 } from '../_events/E2018-11-11.event';
import { shepperton } from '../_locations/shepperton.location';
import { steventon } from '../_locations/steventon.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { bearFactory } from './_brands/bear-factory.bear-brand';
import { bear } from './_species/bear.bear-species';

export const aiden: IBear = {
  Id: 'aiden',
  Name: 'Aiden',
  Description: ``,
  UploadedOn: new Date(2018, 10, 12),
  Info: {
    Brand: bearFactory,
    Species: bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2018, 9, 13),
  },
  Event: E20181111,
  Rehomed: {
    Location: steventon,
    Date: new Date(2018, 10, 11),
  },
};
