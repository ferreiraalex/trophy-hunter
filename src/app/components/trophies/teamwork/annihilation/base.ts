import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const annihilation: TrophyBase = {
  island: 'teamwork',
  name: 'annihilation',
  level: 'teamwork6',
  title: i18n('Annihilation'),
  description: i18n(
    'Be involved in 5 kills in 25 seconds.\nARAM: Achieve this twice in 1 game'
  ),
  category: 'teamwork',
  aramSupport: true,
};

export default annihilation;
