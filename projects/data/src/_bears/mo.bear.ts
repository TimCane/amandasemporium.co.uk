import { cobham } from '../_locations/cobham.location';
import { southShields } from '../_locations/southShields.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const mo: IBear = {
  Id: 'mo',
  Name: 'Mo',
  Description: `Introducing Mo, the playful and mischievous monkey teddy bear! With his furry blonde coat, big eyes, and a heart filled with curiosity, Mo is the perfect companion for those who love adventure and enjoy the lighthearted antics of a mischievous monkey.
  Mo's appearance reflects his playful nature. His soft, blonde fur is perfect for cuddling, while his big, expressive eyes sparkle with a sense of mischief. Mo's friendly smile and animated gestures make him an endearing friend to have by your side as you embark on imaginative escapades together.
  As a friend, Mo is energetic, curious, and always ready to have fun. He embraces the spirit of playfulness and encourages you to let your imagination run wild. Mo's presence brings a sense of joy and spontaneity, reminding you to embrace the simple pleasures in life.
  Mo's adventures are filled with laughter, discovery, and the joy of living in the moment. Whether he's swinging from imaginary vines, playing hide-and-seek, or simply engaging in playful games, he brings a sense of excitement and wonder to every interaction. Mo's mischievous nature inspires others to embrace their own playful side and to find delight in the little things.
  While Mo may be a teddy bear, he carries the spirit of a mischievous monkey and the values of spontaneity, curiosity, and joy. He understands the importance of embracing adventure and savoring the present moment. Mo's presence fosters a sense of lightheartedness and reminds us to find happiness in the simplest of pleasures.
  With Mo by your side, every day becomes an opportunity for fun and exploration. Whether you're engaging in imaginative play, embarking on creative adventures, or simply relishing in the joy of laughter, Mo's playful spirit will ignite your own sense of curiosity and deepen your connection to the world of playful imagination.
  So, if you're seeking a furry friend who embodies the spirit of a mischievous monkey and the joy of lighthearted play, Mo the monkey teddy bear is the perfect choice. Get ready to swing through the branches of your imagination, embrace the spirit of fun, and experience the laughter and delight that Mo brings as you embark on playful adventures together.`,
  UploadedOn: new Date(2021, 6, 16),
  Type: {
    Type: BearTypeEnum.BearFactory,
  },
  Rescued: {
    Location: cobham,
    Date: new Date(2020, 11, 5),
  },
  Event: null,
  Rehomed: {
    Location: southShields,
    Date: new Date(2021, 11, 5),
  },
};
