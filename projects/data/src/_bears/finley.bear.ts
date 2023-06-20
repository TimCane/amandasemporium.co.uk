import { basingstoke } from '../_locations/basingstoke.location';
import { guildford } from '../_locations/guildford.location';
import { BearType } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const finley: IBear = {
  Id: 'finley',
  Name: 'Finley',
  Type: BearType.BuildABear,
  Rescued: {
    Location: guildford,
    Date: new Date(2022, 7, 7),
  },
  Sold: null,
  Rehomed: {
    Location: basingstoke,
    Date: new Date(2023, 5, 10),
  },
};
