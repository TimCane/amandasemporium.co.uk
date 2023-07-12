import { beamFeatureLtd } from '../_brands/beam-feature-ltd.bear-brand';
import { bansted } from '../_locations/bansted.location';
import { chertsey } from '../_locations/chertsey.location';
import { bear } from '../_species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const chloe: IBear = {
  Id: 'chloe',
  Name: 'Chloe',
  Description: ``,
  UploadedOn: new Date(2019, 4, 31),
  Info: {
    Brand: beamFeatureLtd,
    Species: bear,
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
