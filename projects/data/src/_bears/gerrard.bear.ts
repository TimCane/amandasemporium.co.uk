import { whsmith } from '../_bear-brands/whsmith.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { E20231126 } from '../_events/E2023-11-26.event';
import { andover } from '../_locations/andover.location';
import { odiham } from '../_locations/odiham.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const gerrard: IBear = {
  Id: 'gerrard',
  Name: 'Gerrard',
  Description: ``,
  UploadedOn: new Date(2023, 6, 11),
  Info: {
    Brand: whsmith,
    Species: bear,
  },
  Rescued: {
    Location: andover,
    Date: new Date(2023, 5, 18),
  },
  Event: E20231126,
  Rehomed: {
    Location: odiham,
    Date: new Date(2023, 10, 26),
  },
};
