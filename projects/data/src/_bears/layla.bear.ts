import { shepperton } from '../_locations/shepperton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const layla: IBear = {
  Id: 'layla',
  Name: 'Layla',
  Description: `Introducing Layla, the adorable teddy bear who absolutely adores sunbathing! With her soft and cuddly fur, gentle smile, and a penchant for sunny days, Layla is the epitome of relaxation and bliss.
  Layla's love for sunbathing is contagious. She's always on the lookout for the perfect spot to bask in the warm rays of the sun. Whether it's a sunny windowsill, a cozy patch of grass, or a sandy beach, Layla knows how to find the best spots for soaking up the sun's golden glow.
  When Layla sunbathes, she exudes a sense of tranquility and contentment. With her eyes closed and a serene expression, she knows how to fully embrace the moment and let the warmth of the sun wash over her. She reminds us to slow down, take a break, and appreciate the simple pleasures of life.
  Layla's sunbathing rituals are a thing of beauty. She'll often be seen with a colorful umbrella, a fluffy towel, and a good book by her side. She knows the importance of sun safety and encourages others to take care of their skin while enjoying the sunshine.
  But Layla's love for sunbathing isn't just about relaxation. It's also a way for her to connect with nature and feel the world around her. As she lies under the sun's gentle rays, she listens to the rustling leaves, the chirping birds, and the soft whispers of the breeze. Layla teaches us to be present, to embrace the beauty of our surroundings, and to find solace in nature's embrace.
  With Layla as your sunbathing companion, you'll experience a newfound appreciation for the power of relaxation and rejuvenation. Whether you're lounging by the pool, strolling along the beach, or simply finding a cozy spot in your backyard, Layla's sunny disposition will brighten your day and remind you to savor life's simple pleasures.
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
