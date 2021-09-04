import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const burningComet: TrophyBase = {
  island: 'combat',
  name: 'burningComet',
  level: 'combat2',
  title: i18n('Burning Comet'),
  description: i18n('Deal more than 2500 damage with Arcane Comet (rune).'),
  category: 'combat',
  maxProgress: 2500,
};

export default burningComet;
