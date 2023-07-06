import { cobham } from '../_locations/cobham.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bear: IBear = {
  Id: 'bear',
  Name: 'Bear',
  Description: `Meet Bear, the courageous and adventurous teddy bear who is always ready for thrilling expeditions and exciting escapades! With his rugged appearance, a twinkle in his eye, and an insatiable curiosity, Bear is the perfect companion for those who crave thrilling journeys and daring discoveries.
  Bear's spirit of adventure knows no bounds. He is always eager to explore new places, whether it's deep in the wilderness, hidden in a secret cave, or even in the imaginative realms of a child's play. With his trusty backpack and a heart full of wanderlust, Bear is always prepared for the next exciting quest.
  Bear's rugged exterior reflects his resilience and determination. He may have a few well-worn patches and some adventurous scars, but they serve as reminders of the incredible journeys he has undertaken. Bear's appearance is a testament to his fearless spirit and the thrilling tales he carries within him.
  As an adventurer, Bear possesses an endless thirst for knowledge and a deep appreciation for nature's wonders. He marvels at breathtaking landscapes, observes fascinating creatures, and relishes in the simple joys of discovering hidden treasures along the way. Bear's passion for exploration is contagious, inspiring others to embrace their own sense of adventure.
  Despite his fearless nature, Bear is a gentle and caring friend. He understands the importance of companionship and looks out for those who accompany him on his adventures. Whether it's lending a helping paw or offering words of encouragement, Bear's loyalty and support make him a trusted and cherished companion.
  With Bear by your side, every day becomes an exhilarating journey. Whether you're embarking on an imaginary quest, exploring the great outdoors, or simply embracing the sense of wonder in everyday life, Bear's adventurous spirit will ignite your imagination and inspire you to chase your dreams.
  So, if you're seeking a furry friend who embodies the spirit of adventure and the thrill of exploration, Bear the adventurous teddy bear is the perfect choice. Get ready to embark on incredible expeditions, create lasting memories, and experience the excitement and bravery that Bear brings into your world.`,
  UploadedOn: new Date(2022, 7, 17),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 11, 5),
  },
  Event: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 9, 27),
  },
};
