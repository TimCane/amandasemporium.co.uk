import { IData } from './data.interface';

export interface IProduct extends IData {
  Name: string;
  Description: string;
  Price: number;
  Hidden: boolean;
  Images: string[];
}
