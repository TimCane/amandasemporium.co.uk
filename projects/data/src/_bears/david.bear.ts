import { E20191006 } from '../_events/E2019-10-06.event';
import { billingshurst } from '../_locations/billingshurst.location';
import { southsea } from '../_locations/southsea.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const david: IBear = {
  Id: 'david',
  Name: 'David',
  Description: `Introducing David, the talented teddy bear who proudly represents the England football team on and off the field! With his soccer jersey, focused gaze, and a heart filled with team spirit, David is the perfect companion for those who love the beautiful game and embrace the joy of cheering for their favorite team.
  David's football attire showcases his dedication and loyalty to the England team. His jersey proudly displays the emblem of the national team, symbolizing his unwavering support. David's focused gaze reflects his determination and passion for the sport, making him an inspiring friend to have by your side.
  As a friend, David is determined, supportive, and always ready to kick around a ball. He understands the power of teamwork, resilience, and the thrill of victory. David's presence brings a sense of camaraderie and excitement, reminding you that you have a fellow football enthusiast to share the highs and lows of the game.
  David's football adventures are filled with the excitement of intense matches, skillful maneuvers, and the joy of scoring goals. Whether he's participating in imaginary football tournaments, showcasing his dribbling skills, or simply engaging in playful games, he brings the energy and passion of the sport to every play. David's love for football inspires others to embrace their own athletic talents and to celebrate the spirit of friendly competition.
  While David may be a teddy bear, he carries the spirit of a dedicated football player and the values of sportsmanship, perseverance, and fair play. He understands the importance of unity, discipline, and the joy of playing as a team. David's presence fosters a sense of sportsmanship and a love for the beautiful game.
  With David by your side, every day becomes an opportunity to celebrate the sport you love. Whether you're participating in imaginary matches, cheering on your favorite team, or simply relishing in the memories of football seasons past, David's football spirit will ignite your own passion for the game and deepen your connection to the world of football.
  So, if you're seeking a furry friend who embodies the spirit of a football player and the excitement of cheering for the England team, David the football-loving teddy bear is the perfect choice. Get ready to engage in thrilling football adventures, celebrate the joys of being a fan, and experience the thrill of the game alongside David as you embrace the world of football together.`,
  UploadedOn: new Date(2019, 8, 9),
  Type: {
    Type: BearTypeEnum.BuildABear,
  },
  Rescued: {
    Location: southsea,
    Date: new Date(2019, 5, 2),
  },
  Event: E20191006,
  Rehomed: {
    Location: billingshurst,
    Date: new Date(2019, 9, 6),
  },
};
