import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20221204 } from '../_events/E2022-12-04.event';
import { addlestone } from '../_locations/addlestone.location';
import { ashVale } from '../_locations/ashVale.location';
import { rabbit } from '../_species/rabbit.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const jessica: IBear = {
  Id: 'jessica',
  Name: 'Jessica',
  Description: ``,
  UploadedOn: new Date(2022, 11, 2),
  Info: {
    Brand: buildABear,
    Species: rabbit,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2022, 10, 4),
  },
  Event: E20221204,
  Rehomed: {
    Location: ashVale,
    Date: new Date(2022, 11, 4),
  },
};
