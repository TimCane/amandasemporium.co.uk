import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';
import { addlestone } from '../_locations/addlestone.location';
import { E20240721 } from '../_events/E2024-07-21.event';
import { westbury } from '../_locations/westbury.location';

export const wilson: IBear = {
  Id: 'wilson',
  Name: 'Wilson',
  Description: ``,
  UploadedOn: new Date(2024, 6, 19),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 9, 9),
  },
  Event: E20240721,
  Rehomed: {
    Date: new Date(2024,5,21),
    Location: westbury
  },
};
