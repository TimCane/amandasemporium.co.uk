import { disneyStore } from '../_bear-brands/disney-store.bear-brand';
import { E20210925 } from '../_events/E2021-09-25.event';
import { cobham } from '../_locations/cobham.location';
import { surbiton } from '../_locations/surbiton.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const duffy: IBear = {
  Id: 'duffy',
  Name: 'Duffy',
  Description: ``,
  UploadedOn: new Date(2019, 11, 12),
  Info: {
    Brand: disneyStore,
    Species: bear,
  },
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 11, 5),
  },
  Event: E20210925,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2021, 8, 25),
  },
};
