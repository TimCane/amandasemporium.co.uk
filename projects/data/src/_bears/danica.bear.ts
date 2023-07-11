import { hunston } from '../_locations/hunston.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { wilkinson } from './_brands/wilkinson.bear-brand';
import { bear } from './_species/bear.bear-species';

export const danica: IBear = {
  Id: 'danica',
  Name: 'Danica',
  Description: ``,
  UploadedOn: new Date(2023, 6, 11),
  Info: {
    Brand: wilkinson,
    Species: bear,
  },
  Rescued: {
    Location: hunston,
    Date: new Date(2023, 3, 30),
  },
  Event: null,
  Rehomed: null,
};
