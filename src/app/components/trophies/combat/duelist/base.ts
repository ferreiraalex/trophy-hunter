import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const duelist: TrophyBase = {
  island: 'combat',
  name: 'duelist',
  level: 'combat2',
  title: i18n('Duelist'),
  description: i18n('Achieve three solo kills.'),
  category: 'combat',
};

export default duelist;
