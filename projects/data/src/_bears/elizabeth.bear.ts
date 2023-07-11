import { E20190413 } from '../_events/E2019-04-13.event';
import { ashford } from '../_locations/ashford.location';
import { chertseySouth } from '../_locations/chertseySouth.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { iLoveFancyDress } from './_brands/i-love-fancy-dress.bear-brand';
import { bear } from './_species/bear.bear-species';

export const elizabeth: IBear = {
  Id: 'elizabeth',
  Name: 'Elizabeth',
  Description: ``,
  UploadedOn: new Date(2019, 3, 7),
  Info: {
    Brand: iLoveFancyDress,
    Species: bear,
  },
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 0, 8),
  },
  Event: E20190413,
  Rehomed: {
    Location: chertseySouth,
    Date: new Date(2019, 3, 13),
  },
};
