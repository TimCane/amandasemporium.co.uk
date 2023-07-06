import { shepperton } from '../_locations/shepperton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const ella: IBear = {
  Id: 'ella',
  Name: 'Ella',
  Description: `Introducing Ella, the adorable teddy bear with a heart full of love and a penchant for holding hands! With her soft and cuddly fur, twinkling eyes, and a charming blue dress with a matching bow, Ella is the epitome of sweetness and companionship.
  Ella's love for holding hands is truly endearing. She understands the power of touch and the connection it creates between friends. Whenever you need a comforting presence or a gesture of support, Ella is there, ready to extend her paw and hold your hand tightly, reminding you that you're never alone.
  Ella's blue dress and matching bow reflect her gentle and serene nature. The calming shade of blue represents tranquility and loyalty, mirroring Ella's unwavering commitment to friendship. She cherishes every moment spent together and delights in the simple joy of holding hands.
  As a friend, Ella is compassionate, patient, and always there to lend an ear. She understands the importance of communication and the healing power of shared experiences. Ella listens attentively, offering comfort, understanding, and a reassuring hand to hold during both joyful and challenging times.
  Ella's presence brings a sense of warmth and serenity to any setting. Whether she's sitting quietly on a shelf, nestled on a bed, or being carried on an adventure, Ella emanates a calm and inviting energy. Her soft touch and comforting embrace make her the perfect companion for those seeking solace and reassurance.
  With Ella by your side, every day becomes a journey of togetherness and connection. Whether you're exploring new places, sharing secrets and dreams, or simply enjoying the comfort of each other's presence, Ella's hand to hold will remind you of the power of friendship and the beauty of human connection.
  So, if you're looking for a furry friend who embodies the spirit of companionship and the joy of holding hands, Ella the teddy bear is the perfect choice. Get ready to embark on heartwarming adventures, create lasting memories, and experience the warmth of Ella's touch as you navigate the beautiful journey of life, hand in paw.`,
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
