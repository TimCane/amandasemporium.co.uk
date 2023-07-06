import { E20191130 } from '../_events/E2019-11-30.event';
import { appledram } from '../_locations/appledram.location';
import { effingham } from '../_locations/effingham.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const adrianna: IBear = {
  Id: 'adrianna',
  Name: 'Adrianna',
  Description: `Introducing Adrianna, the regal teddy bear who reigns as a princess in the realm of cuddles and imagination! With her majestic crown, elegant dress, and a heart full of grace, Adrianna is the perfect companion for those who adore fairy tales and dream of a royal adventure.
  Adrianna's princess persona shines through in every aspect of her appearance. Her crown sparkles with glittering gems, reflecting her inner radiance and her ability to captivate those around her. Her dress, crafted with exquisite detail, exudes elegance and a touch of enchantment, bringing a regal charm to her every movement.
  As a princess, Adrianna possesses a kind and compassionate nature. She embodies the virtues of love, generosity, and courage. Her presence is a beacon of warmth and grace, making everyone feel special and cared for. Adrianna understands the power of a caring heart and encourages others to embrace kindness in their own lives.
  Adrianna's adventures are nothing short of magical. Whether she's attending grand balls, embarking on quests, or engaging in acts of noble kindness, she brings an air of enchantment to every occasion. Adrianna's imagination knows no bounds, and she invites you to join her in a world where dreams come true and anything is possible.
  As a friend, Adrianna is a confidante and a source of inspiration. She listens attentively, offering wisdom and guidance when needed. Her royal presence creates a safe space where you can share your hopes, dreams, and fears, knowing that you are understood and supported.
  With Adrianna by your side, every day becomes a royal affair. Whether you're engaging in imaginative play, attending imaginary royal events, or simply enjoying the grace and elegance of Adrianna's presence, her princess-like charm will ignite your creativity and remind you of the inherent magic that resides within you.
  So, if you're seeking a furry friend who embodies the spirit of a princess and the enchantment of a fairy tale, Adrianna the princess teddy bear is the perfect choice. Get ready to embark on wondrous adventures, embrace your own inner nobility, and experience the joy and wonder that Adrianna brings as you create your very own happily ever after.`,
  UploadedOn: new Date(2019, 8, 30),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: appledram,
    Date: new Date(2019, 8, 7),
  },
  Event: E20191130,
  Rehomed: {
    Location: effingham,
    Date: new Date(2019, 10, 30),
  },
};
