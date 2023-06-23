import { hunston } from '../_locations/hunston.location';
import { westMolesey } from '../_locations/westMolesey.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const violet: IBear = {
  Id: 'violet',
  Name: 'Violet',
  UploadedOn: new Date(2019, 8, 30),
  Type: BearType.BearFactory,
  Rescued: {
    Location: hunston,
    Date: new Date(2019, 8, 21),
  },
  Sold: null,
  Rehomed: {
    Location: westMolesey,
    Date: new Date(2019, 8, 28),
  },
};
