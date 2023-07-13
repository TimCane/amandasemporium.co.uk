import { keelTeddy } from '../_brands/keel-teddy.bear-brand';
import { E20210925 } from '../_events/E2021-09-25.event';
import { farnborough } from '../_locations/farnborough.location';
import { surbiton } from '../_locations/surbiton.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const paul: IBear = {
  Id: 'paul',
  Name: 'Paul',
  Description: ``,
  UploadedOn: new Date(2021, 6, 16),
  Info: {
    Brand: keelTeddy,
    Species: bear,
  },
  Rescued: {
    Location: farnborough,
    Date: new Date(2020, 0, 11),
  },
  Event: E20210925,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2021, 8, 25),
  },
};
