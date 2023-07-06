import { E20220924 } from '../_events/E2022-09-24.event';
import { chessington } from '../_locations/chessington.location';
import { ely } from '../_locations/ely.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const grayson: IBear = {
  Id: 'grayson',
  Name: 'Grayson',
  Description: `Introducing Grayson, the caring teddy bear who brings comfort and healing as a dedicated doctor! With his white lab coat, stethoscope, and a heart filled with compassion, Grayson is the perfect companion for those who value the importance of health, well-being, and the noble profession of medicine.
  Grayson's doctor attire reflects his commitment to caring for others. His white lab coat symbolizes professionalism and the dedication to providing quality healthcare. Grayson's attentive eyes and warm smile convey his genuine desire to help those in need, making him a reassuring presence in times of illness or discomfort.
  As a friend, Grayson is kind-hearted, knowledgeable, and always ready to lend a paw. He understands the importance of empathy and actively listens to the concerns and needs of others. Grayson's presence provides comfort and reassurance, reminding you that you have a trusted friend who will support you through challenging times.
  Grayson's medical adventures are filled with the pursuit of wellness and the art of healing. Whether he's performing check-ups, providing medical advice, or simply engaging in imaginative acts of care, he brings a sense of comfort and reassurance to those around him. Grayson's dedication to the field of medicine inspires others to prioritize their health and embrace the power of compassion.
  While Grayson may be a teddy bear, he carries the spirit of a doctor and the values of kindness, integrity, and service. He understands the importance of promoting well-being and treating others with respect. Grayson's presence fosters a sense of trust and a commitment to caring for oneself and others.
  With Grayson by your side, every day becomes an opportunity to embrace the importance of health and well-being. Whether you're engaging in imaginative play, learning about medical concepts, or simply cherishing the bonds of friendship, Grayson's caring spirit will remind you to prioritize self-care and extend compassion to those around you.
  So, if you're seeking a furry friend who embodies the spirit of a compassionate doctor and the importance of health, Grayson the doctor teddy bear is the perfect choice. Get ready to embark on healing adventures, embrace the power of empathy, and experience the comfort and care that Grayson brings as you navigate the world with a nurturing heart.`,
  UploadedOn: new Date(2022, 3, 24),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: ely,
    Date: new Date(2021, 7, 19),
  },
  Event: E20220924,
  Rehomed: {
    Location: chessington,
    Date: new Date(2022, 8, 24),
  },
};
