import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20190928 } from '../_events/E2019-09-28.event';
import { hunston } from '../_locations/hunston.location';
import { surbiton } from '../_locations/surbiton.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const buzz: IBear = {
  Id: 'buzz',
  Name: 'Buzz',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: hunston,
    Date: new Date(2019, 8, 21),
  },
  Event: E20190928,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2019, 8, 28),
  },
};
