import { bridgemary } from '../_locations/bridgemary.location';
import { cove } from '../_locations/cove.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const tamara: IBear = {
  Id: 'tamara',
  Name: 'Tamara',
  UploadedOn: new Date(2019, 6, 18),
  Type: BearType.BuildABear,
  Rescued: {
    Location: bridgemary,
    Date: new Date(2019, 6, 2),
  },
  Sold: null,
  Rehomed: {
    Location: cove,
    Date: new Date(2019, 7, 7),
  },
};
