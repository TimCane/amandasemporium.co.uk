import { shepperton } from '../_locations/shepperton.location';
import { shrewsbury } from '../_locations/shrewsbury.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const william: IBear = {
  Id: 'william',
  Name: 'William',
  Description: ``,
  UploadedOn: new Date(2018, 3, 29),
  Type: {
    Type: BearTypeEnum.WHSmithBear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: shrewsbury,
    Date: new Date(2018, 3, 18),
  },
  Event: null,
  Rehomed: {
    Location: shepperton,
    Date: new Date(2018, 6, 15),
  },
};
