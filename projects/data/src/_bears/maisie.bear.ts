import { E20191201 } from '../_events/E2019-12-01.event';
import { send } from '../_locations/send.location';
import { southsea } from '../_locations/southsea.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const maisie: IBear = {
  Id: 'maisie',
  Name: 'Maisie',
  Description: ``,
  UploadedOn: new Date(2019, 8, 9),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 7, 4),
  },
  Event: E20191201,
  Rehomed: {
    Location: send,
    Date: new Date(2019, 11, 1),
  },
};
