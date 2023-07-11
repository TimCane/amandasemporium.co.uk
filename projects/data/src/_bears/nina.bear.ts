import { E20220820 } from '../_events/E2022-08-20.event';
import { chertsey } from '../_locations/chertsey.location';
import { farnham } from '../_locations/farnham.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { russ } from './_brands/russ.bear-brand';
import { bear } from './_species/bear.bear-species';

export const nina: IBear = {
  Id: 'nina',
  Name: 'Nina',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Info: {
    Brand: russ,
    Species: bear,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2022, 4, 6),
  },
  Event: E20220820,
  Rehomed: {
    Location: farnham,
    Date: new Date(2022, 7, 20),
  },
};
