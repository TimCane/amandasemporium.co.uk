import { teddyTastic } from '../_brands/teddy-tastic.bear-brand';
import { addlestone } from '../_locations/addlestone.location';
import { upton } from '../_locations/upton.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const simon: IBear = {
  Id: 'simon',
  Name: 'Simon',
  Description: ``,
  UploadedOn: new Date(2023, 4, 30),
  Info: {
    Brand: teddyTastic,
    Species: bear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 2, 16),
  },
  Event: null,
  Rehomed: {
    Location: upton,
    Date: new Date(2023, 5, 20),
  },
};
