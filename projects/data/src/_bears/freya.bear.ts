import { E20230617 } from '../_events/E2023-06-17.event';
import { hartleyWintney } from '../_locations/hartleyWintney.location';
import { ruislip } from '../_locations/ruislip.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { buildABear } from './_brands/build-a-bear.bear-brand';
import { bear } from './_species/bear.bear-species';

export const freya: IBear = {
  Id: 'freya',
  Name: 'Freya',
  Description: ``,
  UploadedOn: new Date(2023, 4, 30),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: ruislip,
    Date: new Date(2022, 11, 21),
  },
  Event: E20230617,
  Rehomed: {
    Location: hartleyWintney,
    Date: new Date(2023, 5, 17),
  },
};
