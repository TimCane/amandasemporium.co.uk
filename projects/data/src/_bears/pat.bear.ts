import { hunston } from '../_locations/hunston.location';
import { sunbury } from '../_locations/sunbury.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const pat: IBear = {
  Id: 'pat',
  Name: 'Pat',
  UploadedOn: new Date(2018, 8, 30),
  Type: BearType.KeelTeddybear,
  Rescued: {
    Location: hunston,
    Date: new Date(2018, 5, 5),
  },
  Sold: null,
  Rehomed: {
    Location: sunbury,
    Date: new Date(2018, 9, 5),
  },
};
