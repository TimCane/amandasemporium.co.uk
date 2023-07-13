import { bearFactory } from '../_bear-brands/bear-factory.bear-brand';
import { E20210731 } from '../_events/E2021-07-31.event';
import { chicester } from '../_locations/chicester.location';
import { winnersh } from '../_locations/winnersh.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const martin: IBear = {
  Id: 'martin',
  Name: 'Martin',
  Description: ``,
  UploadedOn: new Date(2019, 10, 22),
  Info: {
    Brand: bearFactory,
    Species: bear,
  },
  Rescued: {
    Location: chicester,
    Date: new Date(2019, 9, 6),
  },
  Event: E20210731,
  Rehomed: {
    Location: winnersh,
    Date: new Date(2021, 6, 31),
  },
};
