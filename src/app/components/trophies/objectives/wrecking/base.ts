import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const wrecking: TrophyBase = {
  island: 'combat',
  name: 'wrecking',
  level: 'hubObjectives',
  title: i18n('Wrecking'),
  description: i18n('Destroy a turret plate.'),
  category: 'objectives',
};

export default wrecking;
