import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const dominus: TrophyBase = {
  island: 'combat',
  name: 'dominus',
  level: 'combat7',
  title: i18n('Dominus'),
  description: i18n(
    'Achieve a 10 CS advantage over your opponent and 3 kills (at least one of them is a solo kill) at 10 minutes into the game.'
  ),
  category: 'combat',
};

export default dominus;
