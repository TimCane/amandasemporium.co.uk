import { buildABear } from '../_brands/build-a-bear.bear-brand';
import { cobham } from '../_locations/cobham.location';
import { surbiton } from '../_locations/surbiton.location';
import { bear as bearSpecies } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const bear: IBear = {
  Id: 'bear',
  Name: 'Bear',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Info: {
    Brand: buildABear,
    Species: bearSpecies,
  },
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 11, 5),
  },
  Event: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 9, 27),
  },
};
