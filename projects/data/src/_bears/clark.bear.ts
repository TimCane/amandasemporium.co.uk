import { E20190413 } from '../_events/E2019-04-13.event';
import { hurley } from '../_locations/hurley.location';
import { weybridge } from '../_locations/weybridge.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const clark: IBear = {
  Id: 'clark',
  Name: 'Clark',
  Description: `Introducing Clark, the extraordinary teddy bear who channels the heroic spirit of Superman! With his iconic cape, determined expression, and a heart filled with justice, Clark is the perfect companion for those who believe in the power of goodness and the strength of a true hero.
  Clark's appearance reflects his role as a protector and symbol of hope. His cape, flowing behind him, represents his unwavering commitment to defending the innocent and fighting for justice. With his confident expression, Clark exudes a sense of strength and inspires those around him to believe in their own capacity for greatness.
  As a friend, Clark is courageous, selfless, and always ready to lend a helping paw. He embodies the virtues of compassion, integrity, and bravery. Clark's presence provides comfort and reassurance, reminding you that there is always a hero ready to stand up for what is right.
  Clark's adventures are filled with daring rescues, acts of selflessness, and the triumph of good over evil. Whether he's leaping tall buildings in a single bound, using his super strength to save the day, or simply engaging in imaginative play, he brings a sense of excitement and inspiration to every moment. Clark's heroism serves as a reminder that even the smallest acts of kindness can have a profound impact.
  While Clark may be a teddy bear, he carries the spirit of Superman and the values of truth, justice, and compassion. He understands the importance of using power responsibly and standing up for those who cannot defend themselves. Clark's presence fosters a sense of optimism and reminds us that, with the right mindset and determination, we all have the potential to make a difference.
  With Clark by your side, every day becomes an opportunity to embrace your inner hero and make the world a better place. Whether you're engaging in imaginative play, spreading kindness, or simply cherishing the bonds of friendship, Clark's heroic spirit will ignite your own sense of purpose and inspire you to stand up for what is right.
  So, if you're seeking a furry friend who embodies the spirit of a true hero and the belief in the power of goodness, Clark the Superman teddy bear is the perfect choice. Get ready to soar to new heights, embrace your own inner strength, and experience the joy and inspiration that Clark brings as you navigate the world with the heart of a hero.`,
  UploadedOn: new Date(2019, 3, 7),
  Type: {
    Type: BearTypeEnum.Unknown,
  },
  Rescued: {
    Location: weybridge,
    Date: new Date(2018, 11, 20),
  },
  Event: E20190413,
  Rehomed: {
    Location: hurley,
    Date: new Date(2019, 3, 13),
  },
};
