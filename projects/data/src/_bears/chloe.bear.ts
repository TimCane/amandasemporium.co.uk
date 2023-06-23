import { bansted } from '../_locations/bansted.location';
import { chertsey } from '../_locations/chertsey.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const chloe: IBear = {
  Id: 'chloe',
  Name: 'Chloe',
  UploadedOn: new Date(2019, 4, 31),
  Type: BearType.BeamFeatureLtd,
  Rescued: {
    Location: chertsey,
    Date: new Date(2019, 2, 29),
  },
  Sold: null,
  Rehomed: {
    Location: bansted,
    Date: new Date(2019, 6, 14),
  },
};
