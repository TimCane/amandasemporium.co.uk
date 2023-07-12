import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20230625 } from '../_events/E2023-06-25.event';
import { broxbourne } from '../_locations/broxbourne.location';
import { ruislip } from '../_locations/ruislip.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const lee: IBear = {
  Id: 'lee',
  Name: 'Lee',
  Description: ``,
  UploadedOn: new Date(2023, 5, 20),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: ruislip,
    Date: new Date(2022, 11, 21),
  },
  Event: E20230625,
  Rehomed: {
    Date: new Date(2023, 5, 25),
    Location: broxbourne,
  },
};
