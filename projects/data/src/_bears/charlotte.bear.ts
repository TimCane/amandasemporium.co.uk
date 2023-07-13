import { gloriousBritian } from '../_brands/glorious-britian.bear-brand';
import { E20190928 } from '../_events/E2019-09-28.event';
import { surbiton } from '../_locations/surbiton.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const charlotte: IBear = {
  Id: 'charlotte',
  Name: 'Charlotte',
  Description: ``,
  UploadedOn: new Date(2019, 6, 18),
  Info: {
    Brand: gloriousBritian,
    Species: bear,
  },
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2019, 4, 29),
  },
  Event: E20190928,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2019, 8, 28),
  },
};
