import { E20180905 } from '../_events/E2018-09-05.event';
import { hunston } from '../_locations/hunston.location';
import { sunbury } from '../_locations/sunbury.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const pat: IBear = {
  Id: 'pat',
  Name: 'Pat',
  Description: ``,
  UploadedOn: new Date(2018, 8, 30),
  Info: {
    Brand: BearBrandEnum.KeelTeddybear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: hunston,
    Date: new Date(2018, 4, 5),
  },
  Event: E20180905,
  Rehomed: {
    Location: sunbury,
    Date: new Date(2018, 8, 5),
  },
};
