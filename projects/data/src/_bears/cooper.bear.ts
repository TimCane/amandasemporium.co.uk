import { addlestone } from '../_locations/addlestone.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const cooper: IBear = {
  Id: 'cooper',
  Name: 'Cooper',
  Description: `Introducing Cooper, the teddy bear who knows how to pamper himself and enjoy the ultimate relaxation! With his cozy dressing gown, comfortable slippers, and a penchant for spa-like experiences, Cooper is the perfect companion for those seeking moments of serenity and self-care.
  Cooper's love for the spa is evident in every aspect of his demeanor. He understands the importance of taking time for oneself and indulging in restorative activities. Whether it's a soothing bubble bath, a calming face mask, or simply lounging in his dressing gown and slippers, Cooper knows how to create a tranquil atmosphere that promotes relaxation and rejuvenation.
  Cooper's dressing gown and slippers symbolize his commitment to comfort and self-care. The soft fabric of his gown envelops him in warmth and coziness, while his slippers provide a plush and supportive foundation for his spa-like escapades. Cooper's attire invites you to join him in unwinding and cherishing moments of blissful relaxation.
  As a friend, Cooper is laid-back, patient, and always ready to lend a listening ear. He understands the importance of mental and physical well-being and encourages others to prioritize self-care. Cooper's calm and soothing presence makes him the perfect companion for quiet moments of reflection or engaging in activities that bring tranquility and peace.
  Cooper's spa-like experiences go beyond just physical relaxation. He embraces a holistic approach to self-care, encompassing mindfulness, meditation, and finding inner harmony. Cooper encourages you to embrace the present moment, let go of stress, and embrace the beauty of stillness.
  With Cooper by your side, every day becomes a soothing retreat. Whether you're indulging in a spa day, savoring a cup of herbal tea, or simply enjoying the serenity of a peaceful moment, Cooper's relaxed nature will remind you of the importance of self-care and the power of slowing down in a fast-paced world.
  So, if you're looking for a furry friend who embodies the spirit of tranquility and the joy of self-care, Cooper the teddy bear is the perfect choice. Get ready to immerse yourself in moments of relaxation, find solace in simple pleasures, and experience the peaceful bliss that Cooper brings as you embrace the art of chilling out and cherishing your well-being.`,
  UploadedOn: new Date(2022, 10, 8),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: addlestone,
    Date: new Date(2022, 8, 14),
  },
  Event: null,
  Rehomed: {
    Location: surbiton,
    Date: new Date(2022, 9, 27),
  },
};
