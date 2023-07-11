import { chicester } from '../_locations/chicester.location';
import { surbiton } from '../_locations/surbiton.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { bearFactory } from './_brands/bear-factory.bear-brand';
import { bear } from './_species/bear.bear-species';

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
