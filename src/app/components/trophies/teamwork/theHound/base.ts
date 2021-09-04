import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theHound: TrophyBase = {
  island: 'teamwork',
  name: 'theHound',
  level: 'teamwork8',
  title: i18n('The Hound'),
  description: i18n(
    'Set up others to carry. Achieve five assists before ten minutes.\nARAM: Eight assists before 5 minutes'
  ),
  category: 'teamwork',
  aramSupport: true,
};

export default theHound;
