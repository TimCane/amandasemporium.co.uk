import { E20181122 } from '../_events/E2018-11-22.event';
import { chertsey } from '../_locations/chertsey.location';
import { hongKong } from '../_locations/hongKong.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const primrose: IBear = {
  Id: 'primrose',
  Name: 'Primrose',
  Description: ``,
  UploadedOn: new Date(2018, 3, 29),
  Type: {
    Type: BearTypeEnum.AsWatsonHealthAndBeautyCo,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2018, 2, 26),
  },
  Event: E20181122,
  Rehomed: {
    Location: hongKong,
    Date: new Date(2018, 10, 22),
  },
};
