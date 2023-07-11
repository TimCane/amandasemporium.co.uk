import { E20180421 } from '../_events/E2018-04-21.event';
import { horley } from '../_locations/horley.location';
import { waltonUponThames } from '../_locations/waltonUponThames.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const alfie: IBear = {
  Id: 'alfie',
  Name: 'Alfie',
  Description: ``,
  UploadedOn: new Date(2018, 3, 29),
  Type: {
    Type: BearTypeEnum.BuildABear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: waltonUponThames,
    Date: new Date(2018, 3, 4),
  },
  Event: E20180421,
  Rehomed: {
    Location: horley,
    Date: new Date(2018, 3, 21),
  },
};
