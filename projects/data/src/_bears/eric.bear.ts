import { addlestone } from '../_locations/addlestone.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { bearFactory } from './_brands/bear-factory.bear-brand';
import { bear } from './_species/bear.bear-species';

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
  Rehomed: null,
};
