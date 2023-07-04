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
  With Mabel by your side, every day becomes an opportunity for adventure and discovery. Whether you're picnicking in the park, cuddling up for storytime, or simply enjoying the beauty of nature, Mabel's warm presence will bring a touch of magic to your world.`,
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
