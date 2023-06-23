import { addlestone } from '../_locations/addlestone.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const luna: IBear = {
  Id: 'luna',
  Name: 'Luna',
  UploadedOn: new Date(2023, 4, 30),
  Type: BearType.BuildABear,
  Rescued: {
    Location: addlestone,
    Date: new Date(2023, 2, 16),
  },
  Sold: null,
  Rehomed: null,
};
