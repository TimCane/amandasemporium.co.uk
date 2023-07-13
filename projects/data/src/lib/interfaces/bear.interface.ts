import { IBearInfo } from './bear-info.interface';
import { IBearLocation } from './bear-location.interface';
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
