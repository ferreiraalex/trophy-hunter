import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const superiorBrain: TrophyBase = {
  island: 'combat',
  name: 'superiorBrain',
  level: 'combat5',
  title: i18n('Superior Brain'),
  description: i18n(
    'Have more than twice damage to enemy champions than damage taken.'
  ),
  category: 'combat',
};

export default superiorBrain;
