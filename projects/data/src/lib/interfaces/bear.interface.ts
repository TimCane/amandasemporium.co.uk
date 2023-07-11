import { IBearLocation } from './bear-location.interface';
import { IBearInfo } from './bear-type.interface';
import { IData } from './data.interface';
import { IEvent } from './event.interface';

export interface IBear extends IData {
  Name: string;
  Description: string;
  UploadedOn: Date;
  Info: IBearInfo;
  Rescued: IBearLocation;
  Event: IEvent | null;
  Rehomed: IBearLocation | null;
}
