import { woking } from '../_locations/woking.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { whsmith } from './_brands/whsmith.bear-brand';
import { bear } from './_species/bear.bear-species';

export const wendy: IBear = {
  Id: 'wendy',
  Name: 'Wendy',
  Description: ``,
  UploadedOn: new Date(2023, 4, 30),
  Info: {
    Brand: whsmith,
    Species: bear,
  },
  Rescued: {
    Location: woking,
    Date: new Date(2022, 10, 1),
  },
  Event: null,
  Rehomed: null,
};
