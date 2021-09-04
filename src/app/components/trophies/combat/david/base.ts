import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const david: TrophyBase = {
  island: 'combat',
  name: 'david',
  level: 'combat2',
  title: i18n('David'),
  description: i18n('Kill an opponent who is at least two levels above you.'),
  category: 'combat',
};

export default david;
