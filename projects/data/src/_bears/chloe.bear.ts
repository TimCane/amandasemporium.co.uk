import { bansted } from '../_locations/bansted.location';
import { chertsey } from '../_locations/chertsey.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const chloe: IBear = {
  Id: 'chloe',
  Name: 'Chloe',
  Description: ``,
  UploadedOn: new Date(2019, 4, 31),
  Info: {
    Brand: BearBrandEnum.BeamFeatureLtd,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2019, 2, 29),
  },
  Event: null,
  Rehomed: {
    Location: bansted,
    Date: new Date(2019, 6, 14),
  },
};
