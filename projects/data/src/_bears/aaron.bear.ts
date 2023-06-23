import { etonWick } from '../_locations/etonWick.location';
import { southsea } from '../_locations/southsea.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const aaron: IBear = {
  Id: 'aaron',
  Name: 'Aaron',
  UploadedOn: new Date(2018, 10, 12),
  Type: BearType.BuildABear,
  Rescued: {
    Location: southsea,
    Date: new Date(2018, 10, 13),
  },
  Sold: null,
  Rehomed: {
    Location: etonWick,
    Date: new Date(2019, 5, 25),
  },
};
