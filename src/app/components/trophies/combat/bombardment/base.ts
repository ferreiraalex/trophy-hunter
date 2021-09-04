import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const bombardment: TrophyBase = {
  island: 'combat',
  name: 'bombardment',
  level: 'combat2',
  title: i18n('Bombardment'),
  description: i18n(
    'Deal more than 1000 damage to champions per minute.\nARAM: 1500 damage per minute.'
  ),
  category: 'combat',
  aramSupport: true,
};

export default bombardment;
