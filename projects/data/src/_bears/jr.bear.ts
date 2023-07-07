import { bracknell } from '../_locations/bracknell.location';
import { ottershaw } from '../_locations/ottershaw.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const jr: IBear = {
  Id: 'jr',
  Name: 'Jr',
  Description: `Introducing Jr, the passionate teddy bear who proudly supports Chelsea Football Club! With his blue and yellow scarf, enthusiastic cheer, and a heart filled with unwavering team spirit, Jr is the perfect companion for those who love the beautiful game and cheer for the Blues.
  Jr's Chelsea-themed attire reflects his dedication to the club. His blue and yellow scarf proudly displays the club's colors, symbolizing his unwavering support. Jr's excited cheer and jubilant expressions showcase his genuine love for Chelsea, making him an inspiring friend to have by your side during matches.
  As a friend, Jr is enthusiastic, loyal, and always ready to celebrate Chelsea's victories. He understands the power of team unity and the exhilaration of cheering for your favorite club. Jr's presence brings a sense of camaraderie and excitement, reminding you that you have a fellow Chelsea fan who shares your passion for the game.
  Jr's football adventures are filled with thrilling matches, unforgettable goals, and the joy of celebrating Chelsea's successes. Whether he's imagining the excitement of Stamford Bridge, chanting in support of the team, or simply engaging in playful football-themed activities, he brings the energy and enthusiasm of the sport to every play. Jr's love for Chelsea inspires others to embrace their own team spirit and to savor the excitement of football.
  While Jr may be a teddy bear, he carries the spirit of a devoted fan and the values of loyalty, sportsmanship, and dedication. He understands the importance of celebrating victories with grace and supporting the team through both highs and lows. Jr's presence fosters a sense of unity and a commitment to cherishing the spirit of football.
  With Jr by your side, every day becomes an opportunity to celebrate the joys of being a Chelsea supporter. Whether you're engaging in imaginative play, watching matches together, or simply relishing in the memories of Chelsea's triumphs, Jr's team spirit will ignite your own passion for the club and deepen your connection to the world of football.
  So, if you're seeking a furry friend who embodies the spirit of a dedicated Chelsea fan and the excitement of cheering for the Blues, Jr the Chelsea-supporting teddy bear is the perfect choice. Get ready to engage in exciting football adventures, celebrate the victories of your favorite club, and experience the joy and camaraderie that Jr brings as you navigate the world of football together.`,
  UploadedOn: new Date(2022, 2, 1),
  Type: {
    Type: BearTypeEnum.BirthdaysBear,
  },
  Rescued: {
    Location: bracknell,
    Date: new Date(2021, 9, 9),
  },
  Event: null,
  Rehomed: {
    Location: ottershaw,
    Date: new Date(2022, 2, 1),
  },
};
