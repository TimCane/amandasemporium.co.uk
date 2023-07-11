import { E20191019 } from '../_events/E2019-10-19.event';
import { farnborough } from '../_locations/farnborough.location';
import { southsea } from '../_locations/southsea.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const blossom: IBear = {
  Id: 'blossom',
  Name: 'Blossom',
  Description: ``,
  UploadedOn: new Date(2019, 8, 30),
  Info: {
    Brand: BearBrandEnum.TheWorks,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 8, 21),
  },
  Event: E20191019,
  Rehomed: {
    Location: farnborough,
    Date: new Date(2019, 9, 19),
  },
};
