import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const thorsHammer: TrophyBase = {
  island: 'teamwork',
  name: 'thorsHammer',
  level: 'teamwork8',
  title: i18n('Thors Hammer'),
  description: i18n(
    'Gain 5000+ more gold than the enemy team in one minute (checked at full minutes).'
  ),
  category: 'teamwork',
};

export default thorsHammer;
