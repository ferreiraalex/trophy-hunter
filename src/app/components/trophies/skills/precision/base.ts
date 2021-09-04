import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const precision: TrophyBase = {
  island: 'skills',
  name: 'precision',
  level: 'skills2',
  title: i18n('Precision'),
  description: i18n(
    'Be 15 cs ahead of your lane opponent at 10 minutes as top, mid or adc.'
  ),
  category: 'skills',
};

export default precision;
