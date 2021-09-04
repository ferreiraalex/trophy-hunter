import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const superiorPosition: TrophyBase = {
  island: 'combat',
  name: 'superiorPosition',
  level: 'combat1',
  title: i18n('Superior Position'),
  description: i18n(
    'Have more than 1.34 times more damage dealt to champions than damage taken.'
  ),
  category: 'combat',
};

export default superiorPosition;
