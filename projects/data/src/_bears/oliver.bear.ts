import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20190928 } from '../_events/E2019-09-28.event';
import { southsea } from '../_locations/southsea.location';
import { surbiton } from '../_locations/surbiton.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const oliver: IBear = {
  Id: 'oliver',
  Name: 'Oliver',
  Description: ``,
  UploadedOn: new Date(2019, 8, 9),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 7, 4),
  },
  Event: E20190928,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2019, 8, 28),
  },
};
