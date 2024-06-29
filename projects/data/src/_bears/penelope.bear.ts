import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';
import { addlestone } from '../_locations/addlestone.location';
import { jacobsWell } from '../_locations/jacobsWell.location';
import { alton } from '../_locations/alton.location';
import { E20240622 } from '../_events/E2024-06-22.event';

export const penelope: IBear = {
  Id: 'penelope',
  Name: 'Penelope',
  Description: ``,
  UploadedOn: new Date(2024, 5, 18),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: jacobsWell,
    Date: new Date(2023, 8, 17),
  },
  Event: E20240622,
  Rehomed: {
    Location: alton,
    Date: new Date(2024, 5, 22),
  }
};
