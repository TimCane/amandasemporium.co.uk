import { southsea } from '../_locations/southsea.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const oliver: IBear = {
  Id: 'oliver',
  Name: 'Oliver',
  UploadedOn: new Date(2019, 8, 9),
  Type: BearType.BuildABear,
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 7, 4),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2019, 8, 28),
  },
};
