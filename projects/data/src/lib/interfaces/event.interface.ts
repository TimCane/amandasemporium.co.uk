import { IData } from './data.interface';
import { IEventLocation } from './event-location.interface';

export interface IEvent extends IData {
  Name: string;
  Date: Date;
  Description: string;
  Location: IEventLocation;
  Website: string;
  Time: string;
}
