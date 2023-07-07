import { shepperton } from '../_locations/shepperton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const isla: IBear = {
  Id: 'isla',
  Name: 'Isla',
  Description: `Introducing Isla, the delightful Scottish teddy bear who exudes warmth, charm, and a touch of Scottish spirit! With her tartan bow, friendly smile, and a heart full of Scottish pride, Isla is the perfect companion for those who appreciate Scottish heritage and all things Scottish.
  Isla's Scottish heritage is evident in every aspect of her appearance. Her tartan bow proudly showcases the vibrant colors and intricate patterns of Scottish tradition. With her soft and cuddly fur, Isla represents the cozy comfort of the Scottish countryside and the welcoming spirit of Scottish hospitality.
  Isla embodies the warmth and friendliness that Scotland is known for. She greets everyone with a cheerful smile and an inviting presence, eager to share the beauty and rich culture of her homeland. Isla knows the importance of community, and she brings people together, fostering a sense of belonging and unity.
  As a true ambassador of Scotland, Isla loves to tell stories about the stunning landscapes, ancient castles, and legendary creatures that grace the Scottish countryside. She takes pride in her heritage and happily shares her knowledge with others, sparking curiosity and a desire to learn more about this captivating land.
  Isla's warm and caring nature is reminiscent of the Scottish spirit of kinship and hospitality. She is always ready to lend a helping paw, offer a comforting embrace, or simply be there to listen. Isla understands the value of friendship and embraces the idea of connecting with others in a genuine and heartfelt way.
  With Isla by your side, you'll experience the beauty of Scotland through her loving eyes. Whether you're imagining walking through rolling green hills, listening to the haunting melodies of Scottish music, or simply savoring a cup of tea, Isla's Scottish charm will transport you to the enchanting landscapes and cultural richness of her homeland.
  So, if you're seeking a teddy bear companion who embodies the spirit of Scottish pride, Isla the Scottish teddy bear is the perfect choice. Get ready to embark on delightful adventures, immerse yourself in Scottish heritage, and experience the warm embrace of Isla's Scottish hospitality as you journey through life's joyful moments, the Scottish way.`,
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
