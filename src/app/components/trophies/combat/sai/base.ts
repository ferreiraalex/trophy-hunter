import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const sai: TrophyBase = {
  island: 'combat',
  name: 'sai',
  level: 'combat5',
  title: i18n('Sai'),
  description: i18n(
    'Achieve a takedown on at least four enemy champions before ten minutes.\nARAM: Five takedowns'
  ),
  category: 'combat',
  aramSupport: true,
};

export default sai;
