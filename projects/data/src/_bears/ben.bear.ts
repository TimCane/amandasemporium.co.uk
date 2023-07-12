import { unknown } from '../_brands/unknown.bear-brand';
import { hammersmith } from '../_locations/hammersmith.location';
import { horsham } from '../_locations/horsham.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const ben: IBear = {
  Id: 'ben',
  Name: 'Ben',
  Description: ``,
  UploadedOn: new Date(2018, 10, 24),
  Info: {
    Brand: unknown,
    Species: bear,
  },
  Rescued: {
    Location: hammersmith,
    Date: new Date(2018, 8, 14),
  },
  Event: null,
  Rehomed: {
    Location: horsham,
    Date: new Date(2019, 6, 14),
  },
};
