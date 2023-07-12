import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { addlestone } from '../_locations/addlestone.location';
import { koala } from '../_species/koala.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const scarlett: IBear = {
  Id: 'scarlett',
  Name: 'Scarlett',
  Description: ``,
  UploadedOn: new Date(2023, 5, 20),
  Info: {
    Brand: buildABear,
    Species: koala,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2021, 10, 6),
  },
  Event: null,
  Rehomed: null,
};
