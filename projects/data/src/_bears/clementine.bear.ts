import { tesco } from '../_brands/tesco.bear-brand';
import { E20180609 } from '../_events/E2018-06-09.event';
import { minsterLovell } from '../_locations/minsterLovell.location';
import { southsea } from '../_locations/southsea.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const clementine: IBear = {
  Id: 'clementine',
  Name: 'Clementine',
  Description: ``,
  UploadedOn: new Date(2018, 4, 18),
  Info: {
    Brand: tesco,
    Species: bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2018, 3, 28),
  },
  Event: E20180609,
  Rehomed: {
    Location: minsterLovell,
    Date: new Date(2018, 5, 9),
  },
};
