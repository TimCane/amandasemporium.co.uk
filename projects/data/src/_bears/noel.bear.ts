import { E20181208 } from '../_events/E2018-12-08.event';
import { egham } from '../_locations/egham.location';
import { horley } from '../_locations/horley.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const noel: IBear = {
  Id: 'noel',
  Name: 'Noel',
  Description: ``,
  UploadedOn: new Date(2018, 11, 3),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: egham,
    Date: new Date(2018, 10, 26),
  },
  Event: E20181208,
  Rehomed: {
    Location: horley,
    Date: new Date(2018, 11, 8),
  },
};
