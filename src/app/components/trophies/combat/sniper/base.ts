import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const sniper: TrophyBase = {
  island: 'combat',
  name: 'sniper',
  level: 'combat8',
  title: i18n('Sniper'),
  description: i18n(
    'Have most damage dealt to champions while taking the least damage.'
  ),
  category: 'combat',
};

export default sniper;
