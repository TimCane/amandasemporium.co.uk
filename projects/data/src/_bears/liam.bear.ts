import { chertsey } from '../_locations/chertsey.location';
import { horley } from '../_locations/horley.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const liam: IBear = {
  Id: 'liam',
  Name: 'Liam',
  UploadedOn: new Date(2022, 3, 24),
  Type: BearType.BearFactory,
  Rescued: {
    Location: chertsey,
    Date: new Date(2022, 1, 21),
  },
  Sold: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2022, 4, 23),
  },
};
