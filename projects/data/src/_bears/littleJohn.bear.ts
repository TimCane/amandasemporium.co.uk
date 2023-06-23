import { southsea } from '../_locations/southsea.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const littleJohn: IBear = {
  Id: 'little-john',
  Name: 'Little John',
  UploadedOn: new Date(2019, 10, 22),
  Type: BearType.KeelTeddybear,
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 8, 4),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2021, 9, 25),
  },
};
