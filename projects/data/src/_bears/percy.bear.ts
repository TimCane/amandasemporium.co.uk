import { andover } from '../_locations/andover.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const percy: IBear = {
  Id: 'percy',
  Name: 'Percy',
  Description: ``,
  UploadedOn: new Date(2023, 6, 11),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: andover,
    Date: new Date(2023, 5, 18),
  },
  Event: null,
  Rehomed: null,
};
