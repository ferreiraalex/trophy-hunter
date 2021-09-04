import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const keyTargets: TrophyBase = {
  island: 'combat',
  name: 'keyTargets',
  level: 'combat1',
  title: i18n('Key Targets'),
  description: i18n(
    'Achieve three kills on the opponent with the highest amount of gold in the game at that point (gold checked at full minutes).\nARAM: Four kills'
  ),
  category: 'combat',
  aramSupport: true,
};

export default keyTargets;
