import { E20230625 } from '../_events/E2023-06-25.event';
import { maidenhead } from '../_locations/maidenhead.location';
import { shepperton } from '../_locations/shepperton.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { russ } from './_brands/russ.bear-brand';
import { bear } from './_species/bear.bear-species';

export const sidney: IBear = {
  Id: 'sidney',
  Name: 'Sidney',
  Description: ``,
  UploadedOn: new Date(2023, 5, 20),
  Info: {
    Brand: russ,
    Species: bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2023, 5, 3),
  },
  Event: E20230625,
  Rehomed: {
    Date: new Date(2023, 5, 25),
    Location: maidenhead,
  },
};
