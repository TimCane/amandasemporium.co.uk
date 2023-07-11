import { chertsey } from '../_locations/chertsey.location';
import { horley } from '../_locations/horley.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { bearFactory } from './_brands/bear-factory.bear-brand';
import { bear } from './_species/bear.bear-species';

export const liam: IBear = {
  Id: 'liam',
  Name: 'Liam',
  Description: ``,
  UploadedOn: new Date(2022, 3, 24),
  Info: {
    Brand: bearFactory,
    Species: bear,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2022, 0, 21),
  },
  Event: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2022, 3, 23),
  },
};
