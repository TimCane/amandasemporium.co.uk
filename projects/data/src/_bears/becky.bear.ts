import { giorgio } from '../_bear-brands/giorgio.bear-brand';
import { E20190817 } from '../_events/E2019-08-17.event';
import { chertsey } from '../_locations/chertsey.location';
import { farnham } from '../_locations/farnham.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const becky: IBear = {
  Id: 'becky',
  Name: 'Becky',
  Description: ``,
  UploadedOn: new Date(2019, 4, 31),
  Info: {
    Brand: giorgio,
    Species: bear,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2019, 2, 29),
  },
  Event: E20190817,
  Rehomed: {
    Location: farnham,
    Date: new Date(2019, 7, 17),
  },
};
