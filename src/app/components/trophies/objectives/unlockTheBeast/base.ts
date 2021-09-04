import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const unlockTheBeast: TrophyBase = {
  island: 'objectives',
  name: 'unlockTheBeast',
  level: 'objectives6',
  title: i18n('Unlock The Beast'),
  description: i18n(
    'Score two kills in the 40 seconds before your team takes baron nashor.'
  ),
  category: 'objectives',
};

export default unlockTheBeast;
