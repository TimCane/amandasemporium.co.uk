// theo.bear.ts
import { bearFactory } from '../_bear-brands/bear-factory.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { E20230923 } from '../_events/E2023-09-23.event';
import { longparish } from '../_locations/longparish.location';
import { surbiton } from '../_locations/surbiton.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const theo: IBear = {
  Id: 'theo',
  Name: 'Theo',
  Description: '',
  UploadedOn: new Date(2023, 8, 27),
  Info: {
    Brand: bearFactory,
    Species: bear,
  },
  Rescued: {
    Location: longparish,
    Date: new Date(2023, 8, 10),
  },
  Event: E20230923,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2023, 8, 23),
  },
};
