import { IData } from './data.interface';

export interface ILocation extends IData {
  Name: string;
  Longitude: number;
  Latitude: number;
}
