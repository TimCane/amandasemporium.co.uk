import { E20191006 } from '../_events/E2019-10-06.event';
import { caterham } from '../_locations/caterham.location';
import { southsea } from '../_locations/southsea.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const mabel: IBear = {
  Id: 'mabel',
  Name: 'Mabel',
  Description: `Introducing Mabel, the enchanting teddy bear with a delightful ladybug dress! With her soft and cuddly fur, gentle smile, and charming outfit, Mabel is the epitome of sweetness and joy.
  Mabel's ladybug dress is as vibrant as her personality. Adorned with bright red and white polka dots, her dress exudes a sense of whimsy and playfulness. It's impossible not to smile when you see her twirling around, spreading happiness wherever she goes.  
  Just like a ladybug, Mabel brings good luck and positive energy. She has a knack for finding the silver lining in any situation and encouraging those around her to do the same. Her presence is a constant reminder to appreciate the little things in life and to embrace the beauty of nature.  
  Mabel is a true friend and confidante. She's a great listener, always ready to lend an ear and provide comfort when you need it most. With her gentle nature and understanding eyes, she creates a safe space where you can share your joys, worries, and dreams.  
  One of Mabel's favorite pastimes is exploring the great outdoors. She loves to frolic in meadows, smelling the sweet flowers and chasing butterflies. Her adventuresome spirit reminds us to embrace nature's wonders, to take time to appreciate the beauty that surrounds us, and to find joy in the simplest of things.
  With Mabel by your side, every day becomes an opportunity for adventure and discovery. Whether you're picnicking in the park, cuddling up for storytime, or simply enjoying the beauty of nature, Mabel's ladybug dress and warm presence will bring a touch of magic to your world.
  So, embrace the joy and charm that Mabel the ladybug-dressed teddy bear brings. Let her remind you of the beauty of nature, the importance of friendship, and the happiness that can be found in even the tiniest moments. Mabel is the perfect companion for all your adventures, big and small!`,
  UploadedOn: new Date(2019, 8, 30),
  Type: {
    Type: BearTypeEnum.Unknown,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 8, 1),
  },
  Event: E20191006,
  Rehomed: {
    Location: caterham,
    Date: new Date(2019, 9, 6),
  },
};
