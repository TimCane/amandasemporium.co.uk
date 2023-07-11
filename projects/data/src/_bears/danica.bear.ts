import { hunston } from '../_locations/hunston.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const danica: IBear = {
  Id: 'danica',
  Name: 'Danica',
  Description: ``,
  UploadedOn: new Date(2023, 6, 11),
  Type: {
    Type: BearTypeEnum.Wilkinson,
  },
  Rescued: {
    Location: hunston,
    Date: new Date(2023, 3, 30),
  },
  Event: null,
  Rehomed: null,
};
