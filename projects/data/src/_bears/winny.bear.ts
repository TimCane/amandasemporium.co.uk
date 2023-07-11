import { E20181109 } from '../_events/E2018-11-09.event';
import { shepperton } from '../_locations/shepperton.location';
import { theale } from '../_locations/theale.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const winny: IBear = {
  Id: 'winny',
  Name: 'Winny',
  Description: ``,
  UploadedOn: new Date(2018, 10, 12),
  Info: {
    Brand: BearBrandEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2018, 8, 8),
  },
  Event: E20181109,
  Rehomed: {
    Location: theale,
    Date: new Date(2018, 10, 9),
  },
};
