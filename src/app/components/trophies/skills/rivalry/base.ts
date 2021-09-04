import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const rivalry: TrophyBase = {
  island: 'skills',
  name: 'rivalry',
  level: 'skills2',
  title: i18n('Rivalry'),
  description: i18n(
    'Win a game where the gold difference in the first 15 minutes was always less than 2000.'
  ),
  category: 'skills',
};

export default rivalry;
