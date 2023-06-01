import { BearType } from '../enums/bear-type.enum';
import { IBearLocation } from './bear-location.interface';

export interface IBear {
  Id: string;
  Name: string;
  Type: BearType;
  Rescued: IBearLocation;
  Sold: IBearLocation | null;
  Rehomed: IBearLocation | null;
}
