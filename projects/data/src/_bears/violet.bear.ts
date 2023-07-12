import { bearFactory } from '../_brands/bear-factory.bear-brand';
import { E20190928 } from '../_events/E2019-09-28.event';
import { hunston } from '../_locations/hunston.location';
import { westMolesey } from '../_locations/westMolesey.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const violet: IBear = {
  Id: 'violet',
  Name: 'Violet',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Info: {
    Brand: bearFactory,
    Species: bear,
  },
  Rescued: {
    Location: hunston,
    Date: new Date(2019, 8, 21),
  },
  Event: E20190928,
  Rehomed: {
    Location: westMolesey,
    Date: new Date(2019, 8, 28),
  },
};
