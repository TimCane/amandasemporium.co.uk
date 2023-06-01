import { royalTunbridgeWells } from '../_locations/royalTunbridgeWells.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const abigail: IBear = {
  Id: 'abigail',
  Name: 'Abigail',
  Type: BearType.BuildABear,
  Rescued: {
    Location: royalTunbridgeWells,
    Date: new Date(2022, 4, 28),
  },
  Sold: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 9, 24),
  },
};
