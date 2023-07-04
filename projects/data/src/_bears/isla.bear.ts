import { shepperton } from '../_locations/shepperton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const isla: IBear = {
  Id: 'isla',
  Name: 'Isla',
  Description: `Introducing Isla, the delightful Scottish teddy bear who exudes warmth, charm, and a touch of Scottish spirit! With her tartan inspired dress, friendly smile, and a heart full of Scottish pride, Isla is the perfect companion for those who appreciate Scottish heritage and all things Scottish.
  Isla's Scottish heritage is evident in every aspect of her appearance. Her tartan inspired dress proudly showcases the vibrant colors and intricate patterns of Scottish tradition. With her soft and cuddly fur, Isla represents the cozy comfort of the Scottish countryside and the welcoming spirit of Scottish hospitality.
  Isla's warm and caring nature is reminiscent of the Scottish spirit of kinship and hospitality. She is always ready to lend a helping paw, offer a comforting embrace, or simply be there to listen. Isla understands the value of friendship and embraces the idea of connecting with others in a genuine and heartfelt way.`,
  UploadedOn: new Date(2022, 11, 2),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2022, 9, 29),
  },
  Event: null,
  Rehomed: null,
};
