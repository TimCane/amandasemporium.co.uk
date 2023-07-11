import { E20220924 } from '../_events/E2022-09-24.event';
import { royalTunbridgeWells } from '../_locations/royalTunbridgeWells.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const abigail: IBear = {
  Id: 'abigail',
  Name: 'Abigail',
  Description: ``,
  UploadedOn: new Date(2022, 7, 17),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: royalTunbridgeWells,
    Date: new Date(2022, 3, 28),
  },
  Event: E20220924,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 8, 24),
  },
};
