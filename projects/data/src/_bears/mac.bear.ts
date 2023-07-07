import { E20191214 } from '../_events/E2019-12-14.event';
import { cobham } from '../_locations/cobham.location';
import { horley } from '../_locations/horley.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const mac: IBear = {
  Id: 'mac',
  Name: 'Mac',
  Description: `Introducing Mac, the teddy bear with a need for speed who takes the wheel as a race car driver for Rusteze! With his sleek design, vibrant colors, and a heart filled with the thrill of racing, Mac is the perfect companion for those who love the excitement of the track and the adrenaline rush of high-speed competition.
  Mac's race car driver attire reflects his passion for the sport. From his racing suit adorned with the Rusteze logo to his sporty helmet, he proudly displays his affiliation with the racing world. Mac's determined expression and focused gaze demonstrate his unwavering commitment to excellence, making him an inspiring friend for all racing enthusiasts.
  As a friend, Mac is daring, competitive, and always ready for the next race. He understands the importance of skill, strategy, and sportsmanship. Mac's presence sparks a sense of excitement and friendly competition, reminding you that you have a fellow racing aficionado who shares your love for the track.
  Mac's racing adventures are filled with high-octane action, hairpin turns, and the pursuit of victory. Whether he's speeding through laps, experiencing the thrill of drafting, or simply engaging in imaginative racing scenarios, he brings the energy and passion of the sport to every moment. Mac's love for racing inspires others to embrace their own inner speedster and to push the boundaries of what they can achieve.
  While Mac may be a teddy bear, he carries the spirit of a race car driver and the values of determination, perseverance, and respect for fellow competitors. He understands the importance of fair play and the thrill of a close finish. Mac's presence fosters a sense of camaraderie among racing enthusiasts and a commitment to continuous improvement.
  With Mac by your side, every day becomes an opportunity to embrace the thrill of racing. Whether you're engaging in imaginative play, learning about racing strategies, or simply cherishing the bonds of friendship, Mac's racing spirit will ignite your own passion for the sport and deepen your connection to the world of high-speed competition.
  So, if you're seeking a furry friend who embodies the spirit of a race car driver and the excitement of the track, Mac the Rusteze race car driving teddy bear is the perfect choice. Get ready to embark on thrilling racing adventures, embrace the spirit of competition, and experience the joy and exhilaration that Mac brings as you speed towards the finish line together.`,
  UploadedOn: new Date(2019, 11, 12),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: cobham,
    Date: new Date(2019, 11, 5),
  },
  Event: E20191214,
  Rehomed: {
    Location: horley,
    Date: new Date(2019, 11, 14),
  },
};
