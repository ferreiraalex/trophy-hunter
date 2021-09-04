import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const valentines: TrophyBase = {
  island: 'special',
  name: 'valentines',
  level: 'special2',
  title: i18n('Valentines'),
  description: i18n(
    "It's about love and romance. Pick a champion who likes to flirt with one of your teammates."
  ),
  category: 'special',
  aramSupport: true,
};

export default valentines;
