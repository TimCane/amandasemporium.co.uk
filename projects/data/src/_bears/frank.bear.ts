import { E20190921 } from '../_events/E2019-09-21.event';
import { godalming } from '../_locations/godalming.location';
import { haylingIsland } from '../_locations/haylingIsland.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const frank: IBear = {
  Id: 'frank',
  Name: 'Frank',
  Description: `Introducing Frank, the courageous teddy bear who proudly serves in the army! With his camouflaged uniform, steadfast gaze, and a heart filled with bravery, Frank is the perfect companion for those who appreciate the sacrifice and dedication of our military personnel.
  Frank's army attire reflects his commitment to service and protection. His camouflaged uniform represents his readiness to face challenges head-on and his unwavering loyalty to his comrades. Frank's attentive gaze showcases his keen sense of awareness and his determination to keep those around him safe.
  As a friend, Frank is loyal, dependable, and always ready to lend a paw. He understands the importance of teamwork and camaraderie. Frank's presence provides a sense of security, reminding you that you have a steadfast companion who will stand by your side through thick and thin.
  Frank's adventures are filled with a sense of duty and purpose. Whether he's engaged in simulated missions, providing comfort to those in need, or engaging in imaginative acts of heroism, Frank's bravery and determination shine through. He inspires others to embrace their own inner strength and to stand up for what they believe in.
  While Frank may be part of the military, he also values compassion and kindness. He recognizes the importance of empathy and support, both on and off the battlefield. Frank's understanding nature and caring demeanor make him a trusted confidante, always ready to listen and offer a comforting presence.
  With Frank by your side, every day becomes an opportunity to embrace courage, honor, and dedication. Whether you're engaging in imaginative play, expressing gratitude for our real-life heroes, or simply cherishing the values that Frank represents, his army spirit will instill a sense of pride and gratitude within you.
  So, if you're seeking a furry friend who embodies the spirit of bravery and the dedication of our military forces, Frank the army teddy bear is the perfect choice. Get ready to embark on courageous adventures, honor the sacrifices of our heroes, and experience the unwavering loyalty and courage that Frank brings into your world.`,
  UploadedOn: new Date(2019, 8, 9),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: haylingIsland,
    Date: new Date(2019, 7, 26),
  },
  Event: E20190921,
  Rehomed: {
    Location: godalming,
    Date: new Date(2019, 8, 21),
  },
};
