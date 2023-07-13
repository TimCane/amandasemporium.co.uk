import { asWatsonHealthAndBeautyCo } from '../_bear-brands/as-watson-health-and-beauty-co.bear-brand';
import { E20181122 } from '../_events/E2018-11-22.event';
import { chertsey } from '../_locations/chertsey.location';
import { philadelphiaUSA } from '../_locations/philadelphiaUSA.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const poppy: IBear = {
  Id: 'poppy',
  Name: 'Poppy',
  Description: ``,
  UploadedOn: new Date(2018, 3, 29),
  Info: {
    Brand: asWatsonHealthAndBeautyCo,
    Species: bear,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2018, 2, 26),
  },
  Event: E20181122,
  Rehomed: {
    Location: philadelphiaUSA,
    Date: new Date(2018, 10, 22),
  },
};
