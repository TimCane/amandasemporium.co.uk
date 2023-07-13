import { wilkinson } from '../_bear-brands/wilkinson.bear-brand';
import { hunston } from '../_locations/hunston.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

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
