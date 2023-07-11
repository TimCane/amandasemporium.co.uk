import { BearSpeciesEnum } from '../enums/bear-species.enum';
import { BearTypeEnum } from '../enums/bear-type.enum';

export interface IBearType {
  Type: BearTypeEnum;
  Species: BearSpeciesEnum;
}
