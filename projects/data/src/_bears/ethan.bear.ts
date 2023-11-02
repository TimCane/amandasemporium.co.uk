import { bearFactory } from '../_bear-brands/bear-factory.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { andover } from '../_locations/andover.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const ethan: IBear = {
  Id: 'ethan',
  Name: 'Ethan',
  Description: ``,
  UploadedOn: new Date(2023, 10, 2),
  Info: {
    Brand: bearFactory,
    Species: bear,
  },
  Rescued: {
    Location: andover,
    Date: new Date(2023, 6, 2),
  },
  Event: null,
  Rehomed: null,
};
