import { E20210814 } from '../_events/E2021-08-14.event';
import { farnham } from '../_locations/farnham.location';
import { ruislip } from '../_locations/ruislip.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const aly: IBear = {
  Id: 'aly',
  Name: 'Aly',
  Description: `Introducing Aly, the brave and loyal teddy bear who proudly serves in the army! With her camouflaged uniform, steadfast determination, and a heart full of courage, Aly is the perfect companion for those who appreciate the dedication and sacrifices of our military heroes.
  Aly's army attire reflects her commitment to service and protection. Her camouflaged uniform represents her readiness to face challenges head-on and her unwavering loyalty to her comrades. Aly carries the spirit of resilience and bravery, embodying the values that soldiers uphold.  
  As a friend, Aly is fiercely loyal, dependable, and always ready to lend a helping paw. She understands the importance of teamwork and camaraderie. Aly's presence provides a sense of security, reminding you that you have a steadfast companion who will stand by your side through thick and thin.  
  Aly's adventures are filled with a sense of duty and purpose. Whether she's engaged in simulated missions, providing comfort to those in need, or engaging in imaginative acts of heroism, Aly's bravery and determination shine through. She inspires others to embrace their own inner strength and to stand up for what they believe in.
  While Aly may be part of the military, she also values compassion and kindness. She recognizes the importance of empathy and support, both on and off the battlefield. Aly's understanding nature and caring demeanor make her a trusted confidante, always ready to listen and offer a comforting presence.
  With Aly by your side, every day becomes an opportunity to embrace courage, honor, and dedication. Whether you're engaging in imaginative play, expressing gratitude for our real-life heroes, or simply cherishing the values that Aly represents, her army spirit will instill a sense of pride and gratitude within you.
  So, if you're seeking a teddy bear companion who embodies the spirit of bravery and the dedication of our military forces, Aly in her army uniform is the perfect choice. Get ready to embark on courageous adventures, honor the sacrifices of our heroes, and experience the unwavering loyalty and courage that Aly brings into your world.`,
  UploadedOn: new Date(2021, 6, 16),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: ruislip,
    Date: new Date(2020, 7, 20),
  },
  Event: E20210814,
  Rehomed: {
    Location: farnham,
    Date: new Date(2021, 7, 14),
  },
};
