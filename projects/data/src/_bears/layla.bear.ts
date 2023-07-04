import { shepperton } from '../_locations/shepperton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const layla: IBear = {
  Id: 'layla',
  Name: 'Layla',
  Description: `Introducing Layla, the adorable teddy bear who absolutely adores sunbathing! With her soft and cuddly fur, gentle smile, and a penchant for sunny days, Layla is the epitome of relaxation and bliss.
  But Layla's love for sunbathing isn't just about relaxation. It's also a way for her to connect with nature and feel the world around her. As she lies under the sun's gentle rays, she listens to the rustling leaves, the chirping birds, and the soft whispers of the breeze. Layla teaches us to be present, to embrace the beauty of our surroundings, and to find solace in nature's embrace.
  So, grab a towel, find a sunny spot, and let Layla the sunbathing teddy bear show you the art of unwinding and finding peace in the warm embrace of the sun. Get ready for moments of pure bliss and a renewed sense of tranquility with this delightful and friendly companion!`,
  UploadedOn: new Date(2023, 5, 20),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2023, 5, 3),
  },
  Event: null,
  Rehomed: null,
};
