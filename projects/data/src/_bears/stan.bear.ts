import { newbury } from '../_locations/newbury.location';
import { ripley } from '../_locations/ripley.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const stan: IBear = {
  Id: 'stan',
  Name: 'Stan',
  Description: ``,
  UploadedOn: new Date(2018, 8, 30),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: ripley,
    Date: new Date(2018, 5, 10),
  },
  Event: null,
  Rehomed: {
    Location: newbury,
    Date: new Date(2018, 3, 22),
  },
};
