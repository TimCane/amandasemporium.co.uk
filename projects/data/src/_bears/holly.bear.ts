import { E20181202 } from '../_events/E2018-12-02.event';
import { egham } from '../_locations/egham.location';
import { leicester } from '../_locations/leicester.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const holly: IBear = {
  Id: 'holly',
  Name: 'Holly',
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
  Event: E20181202,
  Rehomed: {
    Location: leicester,
    Date: new Date(2018, 11, 2),
  },
};
