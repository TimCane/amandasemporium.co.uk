import { unknown } from '../_brands/unknown.bear-brand';
import { E20181202 } from '../_events/E2018-12-02.event';
import { horsell } from '../_locations/horsell.location';
import { ripley } from '../_locations/ripley.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const sophie: IBear = {
  Id: 'sophie',
  Name: 'Sophie',
  Description: ``,
  UploadedOn: new Date(2018, 10, 24),
  Info: {
    Brand: unknown,
    Species: bear,
  },
  Rescued: {
    Location: horsell,
    Date: new Date(2018, 8, 29),
  },
  Event: E20181202,
  Rehomed: {
    Location: ripley,
    Date: new Date(2018, 11, 2),
  },
};
