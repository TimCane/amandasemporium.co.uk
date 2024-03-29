import { ty } from '../_bear-brands/ty.bear-brand';
import { E20180506 } from '../_events/E2018-05-06.event';
import { southsea } from '../_locations/southsea.location';
import { sutton } from '../_locations/sutton.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const charlie: IBear = {
  Id: 'charlie',
  Name: 'Charlie',
  Description: ``,
  UploadedOn: new Date(2018, 4, 18),
  Info: {
    Brand: ty,
    Species: bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2018, 3, 28),
  },
  Event: E20180506,
  Rehomed: {
    Location: sutton,
    Date: new Date(2018, 4, 6),
  },
};
