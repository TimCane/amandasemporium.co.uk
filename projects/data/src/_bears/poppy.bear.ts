import { chertsey } from '../_locations/chertsey.location';
import { philadelphiaUSA } from '../_locations/philadelphiaUSA.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const poppy: IBear = {
  Id: 'poppy',
  Name: 'Poppy',
  UploadedOn: new Date(2018, 3, 29),
  Type: BearType.AsWatsonHealthAndBeautyCo,
  Rescued: {
    Location: chertsey,
    Date: new Date(2018, 3, 26),
  },
  Sold: null,
  Rehomed: {
    Location: philadelphiaUSA,
    Date: new Date(2018, 11, 22),
  },
};
