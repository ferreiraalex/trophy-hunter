import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const blitzkrieg: TrophyBase = {
  island: 'combat',
  name: 'blitzkrieg',
  level: 'combat4',
  title: i18n('Blitzkrieg'),
  description: i18n('Achieve a kill before reaching level 3.'),
  category: 'combat',
};

export default blitzkrieg;
