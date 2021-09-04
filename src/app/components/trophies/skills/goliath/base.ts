import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const goliath: TrophyBase = {
  island: 'skills',
  name: 'goliath',
  level: 'skills2',
  title: i18n('Goliath'),
  description: i18n(
    'Have the single highest champion level at the end of the game.'
  ),
  category: 'skills',
};

export default goliath;
