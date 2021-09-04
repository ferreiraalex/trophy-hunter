import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const pyromania: TrophyBase = {
  island: 'combat',
  name: 'pyromania',
  level: 'objectives4',
  title: i18n('Pyromania'),
  description: i18n('Kill three fire dragons on the same match.'),
  category: 'objectives',
};

export default pyromania;
