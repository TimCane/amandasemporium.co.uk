import { buildABear } from '../_bear-brands/build-a-bear.bear-brand';
import { bear } from '../_bear-species/bear.bear-species';
import { ascot } from '../_locations/ascot.location';
import { wimbledon } from '../_locations/wimbledon.location';
import { IBear } from '../lib/interfaces/bear.interface';

export const isaac: IBear = {
  Id: 'isaac',
  Name: 'Isaac',
  Description: ``,
  UploadedOn: new Date(2023, 6, 11),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: ascot,
    Date: new Date(2022, 2, 3),
  },
  Event: null,
  Rehomed: {
    Location: wimbledon,
    Date: new Date(2023, 7, 12),
  },
};
