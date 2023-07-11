import { chertsey } from '../_locations/chertsey.location';
import { horley } from '../_locations/horley.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const liam: IBear = {
  Id: 'liam',
  Name: 'Liam',
  Description: ``,
  UploadedOn: new Date(2022, 3, 24),
  Info: {
    Brand: BearBrandEnum.BearFactory,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2022, 0, 21),
  },
  Event: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2022, 3, 23),
  },
};
