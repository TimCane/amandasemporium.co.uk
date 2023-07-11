import { E20210925 } from '../_events/E2021-09-25.event';
import { southsea } from '../_locations/southsea.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const littleJohn: IBear = {
  Id: 'little-john',
  Name: 'Little John',
  Description: ``,
  UploadedOn: new Date(2019, 10, 22),
  Info: {
    Brand: BearBrandEnum.KeelTeddybear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 7, 4),
  },
  Event: E20210925,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2021, 8, 25),
  },
};
