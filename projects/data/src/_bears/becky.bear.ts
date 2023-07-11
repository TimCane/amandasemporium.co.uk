import { E20190817 } from '../_events/E2019-08-17.event';
import { chertsey } from '../_locations/chertsey.location';
import { farnham } from '../_locations/farnham.location';
import { BearSpeciesEnum } from '../lib/enums/bear-species.enum';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const becky: IBear = {
  Id: 'becky',
  Name: 'Becky',
  Description: ``,
  UploadedOn: new Date(2019, 4, 31),
  Type: {
    Type: BearTypeEnum.GiorgioBear,
    Species: BearSpeciesEnum.Bear,
  },
  Rescued: {
    Location: chertsey,
    Date: new Date(2019, 2, 29),
  },
  Event: E20190817,
  Rehomed: {
    Location: farnham,
    Date: new Date(2019, 7, 17),
  },
};
