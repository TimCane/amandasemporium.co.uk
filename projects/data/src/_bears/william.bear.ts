import { whsmith } from '../_bear-brands/whsmith.bear-brand';
import { shepperton } from '../_locations/shepperton.location';
import { shrewsbury } from '../_locations/shrewsbury.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const william: IBear = {
  Id: 'william',
  Name: 'William',
  Description: ``,
  UploadedOn: new Date(2018, 3, 29),
  Info: {
    Brand: whsmith,
    Species: bear,
  },
  Rescued: {
    Location: shrewsbury,
    Date: new Date(2018, 3, 18),
  },
  Event: null,
  Rehomed: {
    Location: shepperton,
    Date: new Date(2018, 6, 15),
  },
};
