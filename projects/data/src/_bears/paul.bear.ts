import { E20210925 } from '../_events/E2021-09-25.event';
import { farnborough } from '../_locations/farnborough.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const paul: IBear = {
  Id: 'paul',
  Name: 'Paul',
  Description: ``,
  UploadedOn: new Date(2021, 6, 16),
  Info: {
    Brand: BearBrandEnum.KeelTeddybear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: farnborough,
    Date: new Date(2020, 0, 11),
  },
  Event: E20210925,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2021, 8, 25),
  },
};
