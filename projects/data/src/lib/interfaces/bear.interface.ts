import { BearType } from '../enums/bear-type.enum';
import { IBearLocation } from './bear-location.interface';
import { IData } from './data.interface';

export interface IBear extends IData {
  Name: string;
  UploadedOn: Date;
  Type: BearType;
  Rescued: IBearLocation;
  Sold: IBearLocation | null;
  Rehomed: IBearLocation | null;
}
