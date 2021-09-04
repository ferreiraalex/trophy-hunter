import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const soulHarvest: TrophyBase = {
  island: 'combat',
  name: 'soulHarvest',
  level: 'combat3',
  title: i18n('Soul Harvest'),
  description: i18n('Deal more than 2000 damage with Dark Harvest (rune).'),
  category: 'combat',
  maxProgress: 2000,
};

export default soulHarvest;
