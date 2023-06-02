import { PhotoTag } from '../enums/photo-tag.enum';
import { IData } from './data.interface';

export interface IPhoto extends IData {
  Caption: string;
  Source: string;
  Tags: PhotoTag[];
  Orientation: string;
}
