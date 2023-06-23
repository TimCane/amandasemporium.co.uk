import { andover } from '../_locations/andover.location';
import { pagham } from '../_locations/pagham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const sylvia: IBear = {
  Id: 'sylvia',
  Name: 'Sylvia',
  UploadedOn: new Date(2022, 10, 8),
  Type: BearType.BuildABear,
  Rescued: {
    Location: pagham,
    Date: new Date(2022, 9, 17),
  },
  Sold: null,
  Rehomed: {
    Location: andover,
    Date: new Date(2022, 11, 20),
  },
};
