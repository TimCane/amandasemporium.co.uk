import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';
import { amersham } from '../_locations/amersham.location';
import { E20240622 } from '../_events/E2024-06-22.event';
import { whitehill } from '../_locations/whitehill.location';

export const saskia: IBear = {
  Id: 'saskia',
  Name: 'Saskia',
  Description: ``,
  UploadedOn: new Date(2024, 5, 18),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: amersham,
    Date: new Date(2024, 0, 7),
  },
  Event: E20240622,
  Rehomed: {
    Location: whitehill,
    Date: new Date(2024, 5, 22),
  }
};
