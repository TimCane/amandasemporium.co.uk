import { E20221120 } from '../_events/E2022-11-20.event';
import { andover } from '../_locations/andover.location';
import { emsworth } from '../_locations/emsworth.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const harriet: IBear = {
  Id: 'harriet',
  Name: 'Harriet',
  Description: ``,
  UploadedOn: new Date(2022, 10, 8),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: emsworth,
    Date: new Date(2022, 6, 16),
  },
  Event: E20221120,
  Rehomed: {
    Location: andover,
    Date: new Date(2022, 10, 20),
  },
};
