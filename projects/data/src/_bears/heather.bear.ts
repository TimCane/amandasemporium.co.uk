import { unknown } from '../_bear-brands/unknown.bear-brand';
import { E20220924 } from '../_events/E2022-09-24.event';
import { newbury } from '../_locations/newbury.location';
import { richmond } from '../_locations/richmond.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const heather: IBear = {
  Id: 'heather',
  Name: 'Heather',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Info: {
    Brand: unknown,
    Species: bear,
  },
  Rescued: {
    Location: newbury,
    Date: new Date(2021, 9, 8),
  },
  Event: E20220924,
  Rehomed: {
    Location: richmond,
    Date: new Date(2022, 8, 24),
  },
};
