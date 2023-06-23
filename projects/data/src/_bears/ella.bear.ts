import { addlestone } from '../_locations/addlestone.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const ella: IBear = {
  Id: 'ella',
  Name: 'Ella',
  UploadedOn: new Date(2022, 11, 2),
  Type: BearType.BuildABear,
  Rescued: {
    Location: addlestone,
    Date: new Date(2022, 11, 4),
  },
  Sold: null,
  Rehomed: null,
};
