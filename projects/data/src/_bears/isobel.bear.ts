import { E20191019 } from '../_events/E2019-10-19.event';
import { chertsey } from '../_locations/chertsey.location';
import { horsham } from '../_locations/horsham.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const isobel: IBear = {
  Id: 'isobel',
  Name: 'Isobel',
  Description: ``,
  UploadedOn: new Date(2019, 4, 31),
  Info: {
    Brand: BearBrandEnum.CuddlesCollection,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2019, 2, 29),
  },
  Event: E20191019,
  Rehomed: {
    Location: horsham,
    Date: new Date(2019, 9, 19),
  },
};
