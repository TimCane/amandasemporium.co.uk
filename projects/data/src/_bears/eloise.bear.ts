import { E20220924 } from '../_events/E2022-09-24.event';
import { surbiton } from '../_locations/surbiton.location';
import { westWittering } from '../_locations/westWittering.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const eloise: IBear = {
  Id: 'eloise',
  Name: 'Eloise',
  Description: ``,
  UploadedOn: new Date(2022, 8, 26),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: westWittering,
    Date: new Date(2022, 7, 27),
  },
  Event: E20220924,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 8, 24),
  },
};
