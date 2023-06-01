import { bansted } from '../_locations/bansted.location';
import { chertsey } from '../_locations/chertsey.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const chloe: IBear = {
  Id: 'chloe',
  Name: 'Chloe',
  Type: BearType.BeamFeatureLtd,
  Rescued: {
    Location: chertsey,
    Date: new Date(2019, 3, 29),
  },
  Sold: null,
  Rehomed: {
    Location: bansted,
    Date: new Date(2019, 7, 14),
  },
};
