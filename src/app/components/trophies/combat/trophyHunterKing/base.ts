import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const trophyHunterKing: TrophyBase = {
  island: 'combat',
  name: 'trophyHunterKing',
  level: 'combat7',
  title: i18n('Trophy Hunter King'),
  description: i18n(
    'Achieve a Trophy Hunt (kill each opponent at least once) three times in a row.'
  ),
  category: 'combat',
  maxProgress: 3,
};

export default trophyHunterKing;
