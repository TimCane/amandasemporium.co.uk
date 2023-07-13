import { cuddlesCollection } from '../_bear-brands/cuddles-collection.bear-brand';
import { E20191019 } from '../_events/E2019-10-19.event';
import { chertsey } from '../_locations/chertsey.location';
import { horsham } from '../_locations/horsham.location';
import { bear } from '../_bear-species/bear.bear-species';
import { IBear } from '../lib/interfaces/bear.interface';

export const isobel: IBear = {
  Id: 'isobel',
  Name: 'Isobel',
  Description: ``,
  UploadedOn: new Date(2019, 4, 31),
  Info: {
    Brand: cuddlesCollection,
    Species: bear,
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
