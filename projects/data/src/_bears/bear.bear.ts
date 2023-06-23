import { cobham } from '../_locations/cobham.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bear: IBear = {
  Id: 'bear',
  Name: 'Bear',
  UploadedOn: new Date(2022, 7, 17),
  Type: BearType.BuildABear,
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 11, 5),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 9, 27),
  },
};
