import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

export const REQUIRED_SECONDS = 30;
const deathMarks: TrophyBase = {
  island: 'combat',
  name: 'deathMarks',
  level: 'combat2',
  title: i18n('Death Marks'),
  description: i18n(
    "Perform seven kills and don't die in the 30 seconds afer each kill."
  ),
  category: 'combat',
  maxProgress: 7,
};

export default deathMarks;
