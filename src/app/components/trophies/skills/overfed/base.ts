import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const overfed: TrophyBase = {
  island: 'skills',
  name: 'overfed',
  level: 'skills4',
  title: i18n('Overfed'),
  description: i18n(
    'You spent more than 1.25 times more gold than the next person.'
  ),
  category: 'skills',
};

export default overfed;
