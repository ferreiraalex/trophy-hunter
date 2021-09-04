import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const legendary: TrophyBase = {
  island: 'skills',
  name: 'legendary',
  level: 'skills4',
  title: i18n('Legendary'),
  description: i18n('Achieve a killing spree of eight.'),
  category: 'skills',
};

export default legendary;
