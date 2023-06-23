import { chertsey } from '../_locations/chertsey.location';
import { horsham } from '../_locations/horsham.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const isobel: IBear = {
  Id: 'isobel',
  Name: 'Isobel',
  UploadedOn: new Date(2019, 4, 31),
  Type: BearType.CuddlesCollection,
  Rescued: {
    Location: chertsey,
    Date: new Date(2019, 2, 29),
  },
  Sold: null,
  Rehomed: {
    Location: horsham,
    Date: new Date(2019, 9, 19),
  },
};
