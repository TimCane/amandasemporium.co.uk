import { keelCubby } from '../_bear-brands/keel-cubby.bear-brand';
import { E20190525 } from '../_events/E2019-05-25.event';
import { chertsey } from '../_locations/chertsey.location';
import { miltonKeynes } from '../_locations/miltonKeynes.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const bob: IBear = {
  Id: 'bob',
  Name: 'Bob',
  Description: ``,
  UploadedOn: new Date(2019, 3, 7),
  Info: {
    Brand: keelCubby,
    Species: bear,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2019, 0, 17),
  },
  Event: E20190525,
  Rehomed: {
    Location: miltonKeynes,
    Date: new Date(2019, 4, 25),
  },
};
