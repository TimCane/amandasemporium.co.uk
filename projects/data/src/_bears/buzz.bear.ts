import { E20190928 } from '../_events/E2019-09-28.event';
import { hunston } from '../_locations/hunston.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const buzz: IBear = {
  Id: 'buzz',
  Name: 'Buzz',
  Description: `Introducing Buzz, the adventurous teddy bear who is always ready to take playtime to infinity and beyond! With his iconic spacesuit, laser-focused gaze, and a heart filled with bravery, Buzz is the perfect companion for those who love imagination and exploring the vastness of the universe.
  Buzz's spacesuit reflects his boundless sense of adventure and his belief in the power of imagination. Every detail of his suit, from the jetpack on his back to the insignia on his chest, captures the spirit of an intergalactic explorer. Buzz's confident expression and determined stance remind us that with a little bit of imagination, anything is possible.
  As a friend, Buzz is courageous, loyal, and always ready for action. He embodies the spirit of a true hero, always seeking to protect and defend those around him. Buzz's unwavering bravery and determination inspire others to face their fears, embrace their inner hero, and dream big.
  Buzz's adventures are filled with cosmic discoveries and thrilling missions. Whether he's navigating uncharted planets, battling nefarious villains, or simply engaging in imaginative play, he brings a sense of excitement and wonder to every moment. Buzz's imagination knows no bounds, and he invites you to join him in exploring new frontiers of possibility.
  While Buzz may be a teddy bear, he carries the spirit of a space ranger and the values of loyalty and justice. He understands the importance of friendship and teamwork, and he is always there to support and encourage his fellow adventurers. Buzz's presence fosters a sense of camaraderie and the belief that together, we can accomplish great things.
  With Buzz by your side, every day becomes an epic cosmic journey. Whether you're imagining intergalactic battles, embarking on daring missions, or simply reveling in the magic of make-believe, Buzz's spirit of adventure will ignite your imagination and remind you to embrace the limitless possibilities of your dreams.
  So, if you're seeking a furry friend who embodies the spirit of intergalactic exploration and the joy of imagination, Buzz the Buzz Lightyear teddy bear is the perfect choice. Get ready to soar to new heights, embrace your inner hero, and experience the thrill of playtime that Buzz brings as you journey to infinity and beyond together.`,
  UploadedOn: new Date(2019, 8, 30),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: hunston,
    Date: new Date(2019, 8, 21),
  },
  Event: E20190928,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2019, 8, 28),
  },
};
