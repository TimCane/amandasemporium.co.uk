import { egham } from '../_locations/egham.location';
import { horley } from '../_locations/horley.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const noel: IBear = {
  Id: 'noel',
  Name: 'Noel',
  UploadedOn: new Date(2018, 11, 3),
  Type: BearType.BuildABear,
  Rescued: {
    Location: egham,
    Date: new Date(2018, 10, 26),
  },
  Sold: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2018, 11, 8),
  },
};
