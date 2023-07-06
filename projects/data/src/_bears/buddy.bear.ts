import { chicester } from '../_locations/chicester.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const buddy: IBear = {
  Id: 'buddy',
  Name: 'Buddy',
  Description: `Meet Buddy, the lovable teddy bear who brings joy and friendship wherever he goes! Clad in a cozy green onesie, Buddy is the perfect companion for adventures and snuggles alike.
  Buddy's green onesie reflects his lively and playful nature. The vibrant shade of green mirrors his infectious enthusiasm and his ability to find joy in the simplest of things. Whether it's exploring the outdoors or creating imaginative worlds indoors, Buddy's onesie sets the stage for endless fun and laughter.
  As a friend, Buddy is loyal, caring, and always ready for new experiences. He approaches life with a sense of wonder and curiosity, encouraging others to embrace their own sense of adventure. Buddy's infectious spirit inspires those around him to see the world through a lens of positivity and to cherish the bonds of friendship.
  Buddy's onesie represents his cozy and comforting presence. Wrapped in soft and huggable fabric, he offers a warm embrace that brings comfort and reassurance. Whether you're feeling happy, sad, or simply in need of a cuddle, Buddy is there to brighten your day and remind you that you're never alone.
  With Buddy by your side, every day becomes an adventure. Whether you're embarking on imaginative quests, engaging in playful games, or simply snuggling up for a quiet moment, Buddy's lively energy and friendly nature will fill your world with laughter and love.
  So, if you're seeking a furry friend who embodies the spirit of friendship and the joy of playful moments, Buddy in his green onesie is the perfect choice. Get ready to embark on delightful adventures, create lasting memories, and experience the boundless happiness and companionship that Buddy brings into your world.`,
  UploadedOn: new Date(2019, 11, 12),
  Type: {
    Type: BearTypeEnum.BearFactory,
  },
  Rescued: {
    Location: chicester,
    Date: new Date(2019, 8, 21),
  },
  Event: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 9, 27),
  },
};
