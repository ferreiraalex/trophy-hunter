import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theBlackFlag: TrophyBase = {
  island: 'epic',
  name: 'theBlackFlag',
  level: 'epic2',
  title: i18n('The Black Flag'),
  description: i18n(
    'Never resign! Come back in a game where you have been 10000 gold down.'
  ),
  category: 'epic',
};

export default theBlackFlag;
