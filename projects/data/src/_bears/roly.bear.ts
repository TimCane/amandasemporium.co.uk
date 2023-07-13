import { bearFactory } from '../_bear-brands/bear-factory.bear-brand';
import { E20220820 } from '../_events/E2022-08-20.event';
import { chichester } from '../_locations/chichester.location';
import { woking } from '../_locations/woking.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const roly: IBear = {
  Id: 'roly',
  Name: 'Roly',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Info: {
    Brand: bearFactory,
    Species: bear,
  },
  Rescued: {
    Location: chichester,
    Date: new Date(2022, 4, 14),
  },
  Event: E20220820,
  Rehomed: {
    Location: woking,
    Date: new Date(2022, 7, 20),
  },
};
