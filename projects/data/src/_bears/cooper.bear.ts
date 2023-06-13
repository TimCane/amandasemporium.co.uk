import { addlestone } from '../_locations/addlestone.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const cooper: IBear = {
  Id: 'cooper',
  Name: 'Cooper',
  Type: BearType.BuildABear,
  Rescued: {
    Location: addlestone,
    Date: new Date(2022, 7, 14),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 10, 27),
  },
};
