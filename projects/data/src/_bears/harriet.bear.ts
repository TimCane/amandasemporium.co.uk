import { andover } from '../_locations/andover.location';
import { emsworth } from '../_locations/emsworth.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const harriet: IBear = {
  Id: 'harriet',
  Name: 'Harriet',
  UploadedOn: new Date(2022, 10, 8),
  Type: BearType.BuildABear,
  Rescued: {
    Location: emsworth,
    Date: new Date(2022, 7, 16),
  },
  Sold: null,
  Rehomed: {
    Location: andover,
    Date: new Date(2022, 11, 20),
  },
};
