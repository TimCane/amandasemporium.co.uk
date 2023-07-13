import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20230617 } from '../_events/E2023-06-17.event';
import { hartleyWintney } from '../_locations/hartleyWintney.location';
import { ruislip } from '../_locations/ruislip.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

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
