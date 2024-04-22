// kal.bear.ts
import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20240420 } from '../_events/E2024-04-20.event';
import { addlestone } from '../_locations/addlestone.location';
import { horley } from '../_locations/horley.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { bear } from './bear.bear';

export const kal: IBear = {
  Id: 'kal',
  Name: 'Kal',
  Description: '',
  UploadedOn: new Date(2023, 8, 27),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 8, 20),
  },
  Event: E20240420,
  Rehomed: {
    Location: horley,
    Date: new Date(2024, 3, 20),
  },
};
