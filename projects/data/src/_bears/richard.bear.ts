import { ashGreen } from '../_locations/ashGreen.location';
import { ashford } from '../_locations/ashford.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const richard: IBear = {
  Id: 'richard',
  Name: 'Richard',
  Description: ``,
  UploadedOn: new Date(2021, 7, 11),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Dog,
  },
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 9, 24),
  },
  Event: null,
  Rehomed: {
    Location: ashGreen,
    Date: new Date(2021, 10, 21),
  },
};
