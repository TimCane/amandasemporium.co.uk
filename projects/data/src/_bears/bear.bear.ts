import { cobham } from '../_locations/cobham.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const bear: IBear = {
  Id: 'bear',
  Name: 'Bear',
  Description: `Meet Bear, the courageous and adventurous teddy bear who is always ready for thrilling expeditions and exciting escapades! With his rugged appearance, a twinkle in his eye, and an insatiable curiosity, Bear is the perfect companion for those who crave thrilling journeys and daring discoveries.
  Bear's spirit of adventure knows no bounds. He is always eager to explore new places, whether it's deep in the wilderness, hidden in a secret cave, or even in the imaginative realms of a child's play. With his trusty backpack and a heart full of wanderlust, Bear is always prepared for the next exciting quest.
  Despite his fearless nature, Bear is a gentle and caring friend. He understands the importance of companionship and looks out for those who accompany him on his adventures. Whether it's lending a helping paw or offering words of encouragement, Bear's loyalty and support make him a trusted and cherished companion.`,
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
