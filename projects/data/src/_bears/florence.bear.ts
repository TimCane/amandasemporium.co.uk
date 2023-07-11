import { E20230617 } from '../_events/E2023-06-17.event';
import { chichester } from '../_locations/chichester.location';
import { nottingham } from '../_locations/nottingham.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const florence: IBear = {
  Id: 'florence',
  Name: 'Florence',
  Description: ``,
  UploadedOn: new Date(2022, 8, 26),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: chichester,
    Date: new Date(2022, 8, 10),
  },
  Event: E20230617,
  Rehomed: {
    Location: nottingham,
    Date: new Date(2023, 5, 17),
  },
};
