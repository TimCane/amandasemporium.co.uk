import { E20230617 } from '../_events/E2023-06-17.event';
import { chichester } from '../_locations/chichester.location';
import { nottingham } from '../_locations/nottingham.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const florence: IBear = {
  Id: 'florence',
  Name: 'Florence',
  Description: `Introducing Florence, the nurturing teddy bear who brings comfort and care as a dedicated nurse! With her gentle demeanor, caring smile, and a heart filled with compassion, Florence is the perfect companion for those who value the importance of health, well-being, and the tireless work of healthcare professionals.
  Florence's nurse attire reflects her dedication to helping others. Her nurse uniform symbolizes professionalism and the commitment to providing holistic care. Florence's attentive gaze and warm smile convey her genuine desire to support and heal, making her a comforting presence in times of illness or distress.
  As a friend, Florence is compassionate, empathetic, and always ready to offer a listening ear. She understands the importance of providing emotional support as well as physical care. Florence's presence brings a sense of comfort and reassurance, reminding you that you have a trusted friend who will be there to support you through challenging times.
  Florence's nursing adventures are filled with acts of compassion and the art of healing. Whether she's tending to imaginary patients, offering soothing words of encouragement, or simply engaging in acts of care and kindness, she brings a sense of comfort and reassurance to those around her. Florence's dedication to the field of nursing inspires others to prioritize their well-being and embrace the power of compassion.
  While Florence may be a teddy bear, she carries the spirit of a nurse and the values of empathy, integrity, and dedication. She understands the importance of promoting health and providing holistic care. Florence's presence fosters a sense of trust and a commitment to supporting the well-being of oneself and others.
  With Florence by your side, every day becomes an opportunity to prioritize self-care and extend kindness to those around you. Whether you're engaging in imaginative play, learning about the principles of nursing, or simply cherishing the bonds of friendship, Florence's nurturing spirit will remind you of the importance of compassion and the healing power of connection.
  So, if you're seeking a furry friend who embodies the spirit of a caring nurse and the importance of well-being, Florence the nurse teddy bear is the perfect choice. Get ready to embark on comforting adventures, embrace the power of empathy, and experience the care and compassion that Florence brings as you navigate the world with a nurturing heart.`,
  UploadedOn: new Date(2022, 8, 26),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: chichester,
    Date: new Date(2022, 8, 10),
  },
  Event: E20230617,
  Rehomed: {
    Location: nottingham,
    Date: new Date(2023, 5, 17),
  },
};
