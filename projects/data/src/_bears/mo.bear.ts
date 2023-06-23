import { cobham } from '../_locations/cobham.location';
import { southShields } from '../_locations/southShields.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const mo: IBear = {
  Id: 'mo',
  Name: 'Mo',
  UploadedOn: new Date(2021, 6, 16),
  Type: BearType.BearFactory,
  Rescued: {
    Location: cobham,
    Date: new Date(2020, 11, 5),
  },
  Sold: null,
  Rehomed: {
    Location: southShields,
    Date: new Date(2021, 11, 5),
  },
};
