import { E20210814 } from '../_events/E2021-08-14.event';
import { farnborough } from '../_locations/farnborough.location';
import { farnham } from '../_locations/farnham.location';
import { IBear } from '../lib/interfaces/bear.interface';
import { sainsburys } from './_brands/sainsburys.bear-brand';
import { bear } from './_species/bear.bear-species';

export const stella: IBear = {
  Id: 'stella',
  Name: 'Stella',
  Description: ``,
  UploadedOn: new Date(2021, 7, 11),
  Info: {
    Brand: sainsburys,
    Species: bear,
  },
  Rescued: {
    Location: farnborough,
    Date: new Date(2020, 0, 11),
  },
  Event: E20210814,
  Rehomed: {
    Location: farnham,
    Date: new Date(2021, 7, 14),
  },
};
