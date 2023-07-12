import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20221204 } from '../_events/E2022-12-04.event';
import { addlestone } from '../_locations/addlestone.location';
import { fetcham } from '../_locations/fetcham.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const pandora: IBear = {
  Id: 'pandora',
  Name: 'Pandora',
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
  Event: E20221204,
  Rehomed: {
    Location: fetcham,
    Date: new Date(2022, 11, 4),
  },
};
