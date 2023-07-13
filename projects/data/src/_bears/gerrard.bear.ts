import { whsmith } from '../_bear-brands/whsmith.bear-brand';
import { andover } from '../_locations/andover.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const gerrard: IBear = {
  Id: 'gerrard',
  Name: 'Gerrard',
  Description: ``,
  UploadedOn: new Date(2023, 6, 11),
  Info: {
    Brand: whsmith,
    Species: bear,
  },
  Rescued: {
    Location: andover,
    Date: new Date(2023, 5, 18),
  },
  Event: null,
  Rehomed: null,
};
