import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const smashing: TrophyBase = {
  island: 'combat',
  name: 'smashing',
  level: 'objectives1',
  title: i18n('Smashing'),
  description: i18n('Destroy two turret plates.'),
  category: 'objectives',
};

export default smashing;
