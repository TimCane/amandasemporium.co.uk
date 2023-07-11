import { E20181202 } from '../_events/E2018-12-02.event';
import { horsell } from '../_locations/horsell.location';
import { ripley } from '../_locations/ripley.location';
import { BearBrandEnum } from '../lib/enums/bear-brand.enum';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const sophie: IBear = {
  Id: 'sophie',
  Name: 'Sophie',
  Description: ``,
  UploadedOn: new Date(2018, 10, 24),
  Info: {
    Brand: BearBrandEnum.Unknown,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: horsell,
    Date: new Date(2018, 8, 29),
  },
  Event: E20181202,
  Rehomed: {
    Location: ripley,
    Date: new Date(2018, 11, 2),
  },
};
