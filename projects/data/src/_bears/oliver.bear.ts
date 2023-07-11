import { E20190928 } from '../_events/E2019-09-28.event';
import { southsea } from '../_locations/southsea.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const oliver: IBear = {
  Id: 'oliver',
  Name: 'Oliver',
  Description: ``,
  UploadedOn: new Date(2019, 8, 9),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 7, 4),
  },
  Event: E20190928,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2019, 8, 28),
  },
};
