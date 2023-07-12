import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { E20210925 } from '../_events/E2021-09-25.event';
import { addlestone } from '../_locations/addlestone.location';
import { surbiton } from '../_locations/surbiton.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const blake: IBear = {
  Id: 'blake',
  Name: 'Blake',
  Description: ``,
  UploadedOn: new Date(2021, 7, 11),
  Info: {
    Brand: buildABear,
    Species: bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2021, 6, 16),
  },
  Event: E20210925,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2021, 8, 25),
  },
};
