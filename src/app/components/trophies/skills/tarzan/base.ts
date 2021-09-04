import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const tarzan: TrophyBase = {
  island: 'skills',
  name: 'tarzan',
  level: 'skills6',
  title: i18n('Tarzan'),
  description: i18n(
    'Kill most neutral monsters and be at least one level above everyone else in the end.'
  ),
  category: 'skills',
};

export default tarzan;
