import { E20220924 } from '../_events/E2022-09-24.event';
import { royalTunbridgeWells } from '../_locations/royalTunbridgeWells.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const abigail: IBear = {
  Id: 'abigail',
  Name: 'Abigail',
  UploadedOn: new Date(2022, 7, 17),
  Type: {
    Type: BearTypeEnum.BuildABear,
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
