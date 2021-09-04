import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const voidAura: TrophyBase = {
  island: 'teamwork',
  name: 'voidAura',
  level: 'teamwork5',
  title: i18n('Void Aura'),
  description: i18n('Regenerate 2000 mana using presence of mind (rune).'),
  category: 'teamwork',
  maxProgress: 2000,
};

export default voidAura;
