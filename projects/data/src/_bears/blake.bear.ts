import { E20210925 } from '../_events/E2021-09-25.event';
import { addlestone } from '../_locations/addlestone.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const blake: IBear = {
  Id: 'blake',
  Name: 'Blake',
  Description: `Introducing Blake, the adventurous teddy bear who dreams of exploring the cosmos as an astronaut! With his space suit, gleaming helmet, and a heart filled with wonder, Blake is the perfect companion for those who are fascinated by the mysteries of the universe and the spirit of exploration.
  Blake's astronaut attire reflects his aspirations and love for all things space-related. His space suit is adorned with patches representing interstellar missions and celestial wonders, making him a walking tribute to the grandeur of outer space. With his helmet on, Blake is ready to take off on thrilling cosmic adventures.
  As a friend, Blake is curious, brave, and always eager to learn. He carries the spirit of discovery and the endless possibilities that lie beyond our planet. Blake's enthusiasm for the unknown inspires those around him to embrace their own sense of curiosity and to reach for the stars in their own lives.
  Blake's adventures are out of this world, quite literally! Whether he's imagining exploring distant planets, floating weightlessly in zero gravity, or gazing at the stars in awe, he ignites a sense of wonder and sparks the imagination of those who join him on his cosmic journeys.
  As an astronaut, Blake understands the importance of teamwork, resilience, and problem-solving. He embraces the challenges that come with exploring uncharted territories and encourages others to face their own obstacles with determination and a can-do attitude. Blake's steadfast spirit and commitment to exploration make him an inspiring friend and a beacon of motivation.
  With Blake by your side, every day becomes a celestial quest. Whether you're embarking on imaginary space missions, stargazing under a clear night sky, or simply marveling at the vastness of the universe, Blake's astronaut spirit will fuel your imagination and remind you of the boundless possibilities that await.
  So, if you're seeking a furry friend who embodies the spirit of exploration and the wonder of space, Blake the astronaut teddy bear is the perfect choice. Get ready to embark on extraordinary cosmic adventures, embrace the beauty of the universe, and experience the thrill of discovery as you reach for the stars with Blake by your side.`,
  UploadedOn: new Date(2021, 7, 11),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2021, 6, 16),
  },
  Event: E20210925,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2021, 8, 25),
  },
};
