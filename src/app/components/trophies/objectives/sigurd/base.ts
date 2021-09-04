import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const sigurd: TrophyBase = {
  island: 'combat',
  name: 'sigurd',
  level: 'objectives4',
  title: i18n('Sigurd'),
  description: i18n(
    'Kill the first dragon, at least four more and at least one baron (team achievement).'
  ),
  category: 'objectives',
};

export default sigurd;
