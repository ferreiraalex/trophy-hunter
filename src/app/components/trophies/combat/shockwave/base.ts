import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const shockwave: TrophyBase = {
  island: 'combat',
  name: 'shockwave',
  level: 'combat4',
  title: i18n('Shockwave'),
  description: i18n(
    'Kill two opponents at the same time (+- 1 second) and the same location (+-350units).'
  ),
  category: 'combat',
};

export default shockwave;
