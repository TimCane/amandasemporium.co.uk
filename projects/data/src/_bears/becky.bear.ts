import { E20190817 } from '../_events/E2019-08-17.event';
import { chertsey } from '../_locations/chertsey.location';
import { farnham } from '../_locations/farnham.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { giorgio } from './_brands/giorgio.bear-brand';
import { bear } from './_species/bear.bear-species';

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
