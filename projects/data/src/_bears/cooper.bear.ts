import { addlestone } from '../_locations/addlestone.location';
import { surbiton } from '../_locations/surbiton.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const cooper: IBear = {
  Id: 'cooper',
  Name: 'Cooper',
  Description: `Introducing Cooper, the teddy bear who knows how to pamper himself and enjoy the ultimate relaxation! With his cozy dressing gown, comfortable slippers, and a penchant for spa-like experiences, Cooper is the perfect companion for those seeking moments of serenity and self-care.
  Cooper's dressing gown and slippers symbolize his commitment to comfort and self-care. The soft fabric of his gown envelops him in warmth and coziness, while his slippers provide a plush and supportive foundation for his spa-like escapades. Cooper's attire invites you to join him in unwinding and cherishing moments of blissful relaxation.
  As a friend, Cooper is laid-back, patient, and always ready to lend a listening ear. He understands the importance of mental and physical well-being and encourages others to prioritize self-care. Cooper's calm and soothing presence makes him the perfect companion for quiet moments of reflection or engaging in activities that bring tranquility and peace.`,
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
