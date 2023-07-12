import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20221210 } from '../_events/E2022-12-10.event';
import { horley } from '../_locations/horley.location';
import { westWittering } from '../_locations/westWittering.location';
import { rabbit } from '../_species/rabbit.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const merida: IBear = {
  Id: 'merida',
  Name: 'Merida',
  Description: ``,
  UploadedOn: new Date(2022, 11, 9),
  Info: {
    Brand: buildABear,
    Species: rabbit,
  },
  Rescued: {
    Location: westWittering,
    Date: new Date(2022, 9, 8),
  },
  Event: E20221210,
  Rehomed: {
    Location: horley,
    Date: new Date(2022, 11, 10),
  },
};
