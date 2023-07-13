import { theWorks } from '../_brands/the-works.bear-brand';
import { E20191019 } from '../_events/E2019-10-19.event';
import { farnborough } from '../_locations/farnborough.location';
import { southsea } from '../_locations/southsea.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const blossom: IBear = {
  Id: 'blossom',
  Name: 'Blossom',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Info: {
    Brand: theWorks,
    Species: bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 8, 21),
  },
  Event: E20191019,
  Rehomed: {
    Location: farnborough,
    Date: new Date(2019, 9, 19),
  },
};
