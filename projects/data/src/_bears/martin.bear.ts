import { chicester } from '../_locations/chicester.location';
import { winnersh } from '../_locations/winnersh.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const martin: IBear = {
  Id: 'martin',
  Name: 'Martin',
  UploadedOn: new Date(2019, 10, 22),
  Type: BearType.BearFactory,
  Rescued: {
    Location: chicester,
    Date: new Date(2019, 10, 6),
  },
  Sold: null,
  Rehomed: {
    Location: winnersh,
    Date: new Date(2021, 7, 31),
  },
};
