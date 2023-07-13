import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20221127 } from '../_events/E2022-11-27.event';
import { addlestone } from '../_locations/addlestone.location';
import { odiham } from '../_locations/odiham.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const elsa: IBear = {
  Id: 'elsa',
  Name: 'Elsa',
  Description: ``,
  UploadedOn: new Date(2022, 10, 18),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2022, 10, 14),
  },
  Event: E20221127,
  Rehomed: {
    Location: odiham,
    Date: new Date(2022, 10, 27),
  },
};
