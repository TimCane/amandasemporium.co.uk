import { shepperton } from '../_locations/shepperton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const ella: IBear = {
  Id: 'ella',
  Name: 'Ella',
  Description: `Introducing Ella, the adorable teddy bear with a heart full of love and a penchant for holding hands! With her soft and cuddly fur, twinkling eyes, and a charming blue dress with a matching bow, Ella is the epitome of sweetness and companionship.
  Ella's blue dress and matching bow reflect her gentle and serene nature. The calming shade of blue represents tranquility and loyalty, mirroring Ella's unwavering commitment to friendship. She cherishes every moment spent together and delights in the simple joy of holding hands.
  With Ella by your side, every day becomes a journey of togetherness and connection. Whether you're exploring new places, sharing secrets and dreams, or simply enjoying the comfort of each other's presence, Ella's hand to hold will remind you of the power of friendship and the beauty of human connection.`,
  UploadedOn: new Date(2022, 11, 2),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: shepperton,
    Date: new Date(2022, 9, 29),
  },
  Event: null,
  Rehomed: null,
};
