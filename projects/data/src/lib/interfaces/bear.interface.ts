import { BearType } from '../enums/bear-type.enum';
import { IBearLocation } from './bear-location.interface';
import { IData } from './data.interface';
import { IEvent } from './event.interface';

export interface IBear extends IData {
  Name: string;
  UploadedOn: Date;
  Type: BearType;
  Rescued: IBearLocation;
  Event: IEvent | null;
  Rehomed: IBearLocation | null;
}
