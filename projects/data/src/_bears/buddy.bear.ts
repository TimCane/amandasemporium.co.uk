import { bearFactory } from '../_bear-brands/bear-factory.bear-brand';
import { chicester } from '../_locations/chicester.location';
import { surbiton } from '../_locations/surbiton.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const buddy: IBear = {
  Id: 'buddy',
  Name: 'Buddy',
  Description: ``,
  UploadedOn: new Date(2019, 11, 12),
  Info: {
    Brand: bearFactory,
    Species: bear,
  },
  Rescued: {
    Location: chicester,
    Date: new Date(2019, 8, 21),
  },
  Event: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 9, 27),
  },
};
