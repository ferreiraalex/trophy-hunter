import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const cursedGrounds: TrophyBase = {
  island: 'combat',
  name: 'cursedGrounds',
  level: 'combat4',
  title: i18n('Cursed Grounds'),
  description: i18n(
    'Kill an opponent around a red or blue buff before 10 minutes.'
  ),
  category: 'combat',
};

export default cursedGrounds;
