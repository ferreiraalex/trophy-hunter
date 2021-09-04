import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const deadlyShadow: TrophyBase = {
  island: 'combat',
  name: 'deadlyShadow',
  level: 'combat6',
  title: i18n('Deadly Shadow'),
  description: i18n('Have most kills while taking least damage in the game.'),
  category: 'combat',
};

export default deadlyShadow;
