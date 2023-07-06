import { blackwater } from '../_locations/blackwater.location';
import { horley } from '../_locations/horley.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const ariel: IBear = {
  Id: 'ariel',
  Name: 'Ariel',
  Description: `Introducing Ariel, the enchanting teddy bear who finds joy and tranquility in the depths of the sea! With her shimmering fur, dreamy eyes, and a heart that longs for the ocean, Ariel is the perfect companion for those who are captivated by the mysteries and beauty of the sea.
  Ariel's love for the sea is evident in every aspect of her being. She is drawn to the rhythmic waves, the soothing sounds of crashing surf, and the vastness of the ocean. Ariel's fur sparkles like ocean water under the sun, and her eyes reflect the depth and wonder of the underwater world.
  As a friend, Ariel is gentle, compassionate, and always ready to listen to the stories the sea has to tell. She understands the healing power of the ocean's embrace and the sense of peace it can bring. Ariel's presence is like a refreshing sea breeze, comforting and invigorating at the same time.
  Ariel's adventures are filled with exploration and discovery. She longs to swim alongside graceful dolphins, playfully chase colorful fish, and marvel at the vibrant coral reefs. Ariel inspires a sense of wonder and awe for the wonders that lie beneath the surface, reminding us to cherish the beauty of nature and to protect our oceans.
  With Ariel by your side, every day becomes a seaside adventure. Whether you're imagining the crash of waves on a distant shore, collecting seashells on sandy beaches, or simply reveling in the serenity of a quiet moment by the sea, Ariel's love for the ocean will transport you to a world of tranquility and awe.
  So, if you're seeking a furry friend who embodies the spirit of the sea and the magic of underwater worlds, Ariel the sea-loving teddy bear is the perfect choice. Get ready to dive into enchanting adventures, embrace the beauty of the ocean, and experience the peace and joy that Ariel brings as you navigate the depths of your own imagination.`,
  UploadedOn: new Date(2022, 3, 24),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: blackwater,
    Date: new Date(2022, 0, 29),
  },
  Event: null,
  Rehomed: {
    Location: horley,
    Date: new Date(2022, 3, 23),
  },
};
