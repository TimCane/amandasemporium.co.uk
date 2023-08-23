import { bearFactory } from '../_bear-brands/bear-factory.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { addlestone } from '../_locations/addlestone.location';
import { farnham } from '../_locations/farnham.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const eric: IBear = {
  Id: 'eric',
  Name: 'Eric',
  Description: ``,
  UploadedOn: new Date(2023, 4, 30),
  Info: {
    Brand: bearFactory,
    Species: bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 2, 16),
  },
  Event: null,
  Rehomed: {
    Location: farnham,
    Date: new Date(2023, 7, 12),
  },
};
