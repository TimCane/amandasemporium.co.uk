import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { E20240622 } from '../_events/E2024-06-22.event';
import { alton } from '../_locations/alton.location';
import { staines } from '../_locations/staines.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const nova: IBear = {
  Id: 'nova',
  Name: 'Nova',
  Description: ``,
  UploadedOn: new Date(2024, 3, 22),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: staines,
    Date: new Date(2024, 3, 10),
  },
  Event: E20240622,
  Rehomed: {
    Location: alton,
    Date: new Date(2024, 5, 22),
  }
};
