import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20230617 } from '../_events/E2023-06-17.event';
import { chichester } from '../_locations/chichester.location';
import { nottingham } from '../_locations/nottingham.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const florence: IBear = {
  Id: 'florence',
  Name: 'Florence',
  Description: ``,
  UploadedOn: new Date(2022, 8, 26),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: chichester,
    Date: new Date(2022, 8, 10),
  },
  Event: E20230617,
  Rehomed: {
    Location: nottingham,
    Date: new Date(2023, 5, 17),
  },
};
