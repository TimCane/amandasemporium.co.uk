import { seaford } from '../_locations/seaford.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const petal: IBear = {
  Id: 'petal',
  Name: 'Petal',
  Description: `Introducing Petal, the enchanting teddy bear who brings the beauty of flowers to life! With her soft and huggable petals, gentle smile, and a heart full of floral magic, Petal is a truly unique and delightful companion.
  But Petal's connection to flowers goes beyond aesthetics. She embodies their qualities—grace, resilience, and the ability to bring happiness. Petal has a calming presence, soothing hearts and lifting spirits with her floral aura. She's a friend who understands the importance of nurturing oneself and finding solace in nature's embrace.
  So, if you're seeking a furry friend who embodies the spirit of nature's beauty, Petal the flower-loving teddy bear is the perfect choice. Get ready to immerse yourself in a world of blossoms and discover the profound connection between humans and flowers. Embrace the enchantment that Petal brings and let the beauty of flowers fill your heart with warmth and delight!`,
  UploadedOn: new Date(2023, 5, 20),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: seaford,
    Date: new Date(2023, 5, 11),
  },
  Event: null,
  Rehomed: null,
};
