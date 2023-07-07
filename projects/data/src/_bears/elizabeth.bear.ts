import { E20190413 } from '../_events/E2019-04-13.event';
import { ashford } from '../_locations/ashford.location';
import { chertseySouth } from '../_locations/chertseySouth.location';
import { BearTypeEnum } from '../lib/enums/bear-type.enum';
import { IBear } from '../lib/interfaces/bear.interface';

export const elizabeth: IBear = {
  Id: 'elizabeth',
  Name: 'Elizabeth',
  Description: `Introducing Elizabeth, the delightful teddy bear who proudly wears a tartan skirt! With her charming smile, cozy fur, and a touch of Scottish flair, Elizabeth is the perfect companion for those who appreciate tradition and the beauty of Scottish culture.
  Elizabeth's tartan skirt reflects her connection to Scottish heritage. The intricate patterns and vibrant colors of the tartan symbolize the rich history and traditions of Scotland. With her skirt, Elizabeth embodies the spirit of Scottish pride and brings a touch of elegance and sophistication to any setting.
  As a friend, Elizabeth is warm, kind-hearted, and always ready to lend a listening ear. She understands the value of human connection and cherishes the bonds of friendship. Elizabeth's presence is like a comforting embrace, creating a safe space where you can share your thoughts, dreams, and stories.
  Elizabeth's love for her tartan skirt goes beyond just its aesthetic appeal. She carries the spirit of Scotland within her, embracing the values of community, loyalty, and resilience. Elizabeth takes pride in her heritage and loves to share stories of Scottish folklore, traditions, and historical figures, sparking curiosity and appreciation for Scotland's rich cultural tapestry.
  Elizabeth's adventures are filled with a sense of wonder and discovery. Whether she's exploring the rugged Scottish countryside, participating in traditional dances, or celebrating Scottish holidays, she brings a sense of excitement and authenticity to every experience. Elizabeth's zest for life is contagious, inspiring those around her to embrace their own passions and explore new horizons.
  With Elizabeth by your side, every day becomes a celebration of Scottish heritage. Whether you're learning traditional Scottish dances, sampling Scottish cuisine, or simply appreciating the beauty of the tartan skirt she wears, Elizabeth's Scottish charm will infuse your world with warmth, culture, and a sense of belonging.
  So, if you're seeking a teddy bear companion who embodies the spirit of Scottish pride and the joy of shared traditions, Elizabeth in her tartan skirt is the perfect choice. Get ready to embark on delightful adventures, embrace the richness of Scottish culture, and experience the warmth and friendship that Elizabeth brings into your world.`,
  UploadedOn: new Date(2019, 3, 7),
  Type: {
    Type: BearTypeEnum.ILoveFancyDressBear,
  },
  Rescued: {
    Location: ashford,
    Date: new Date(2019, 0, 8),
  },
  Event: E20190413,
  Rehomed: {
    Location: chertseySouth,
    Date: new Date(2019, 3, 13),
  },
};
