import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { E20180818 } from '../_events/E2018-08-18.event';
import { ripley } from '../_locations/ripley.location';
import { southampton } from '../_locations/southampton.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const susie: IBear = {
  Id: 'susie',
  Name: 'Susie',
  Description: ``,
  UploadedOn: new Date(2018, 8, 30),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: ripley,
    Date: new Date(2018, 5, 17),
  },
  Event: E20180818,
  Rehomed: {
    Location: southampton,
    Date: new Date(2018, 7, 18),
  },
};
