import { bearFactory } from '../_brands/bear-factory.bear-brand';
import { E20221127 } from '../_events/E2022-11-27.event';
import { odiham } from '../_locations/odiham.location';
import { tonbridge } from '../_locations/tonbridge.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const harrison: IBear = {
  Id: 'harrison',
  Name: 'Harrison',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Info: {
    Brand: bearFactory,
    Species: bear,
  },
  Rescued: {
    Location: tonbridge,
    Date: new Date(2022, 3, 28),
  },
  Event: E20221127,
  Rehomed: {
    Location: odiham,
    Date: new Date(2022, 10, 27),
  },
};
