import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const sergeant: TrophyBase = {
  island: 'special',
  name: 'sergeant',
  level: 'special3',
  title: i18n('Sergeant'),
  description: i18n('Complete ten missions.'),
  category: 'special',
  maxProgress: 10,
  aramSupport: true,
};

export default sergeant;
