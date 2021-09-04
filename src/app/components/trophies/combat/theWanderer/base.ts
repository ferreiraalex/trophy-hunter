import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theWanderer: TrophyBase = {
  island: 'combat',
  name: 'theWanderer',
  level: 'combat7',
  title: i18n('The Wanderer'),
  description: i18n(
    'Participate in a kill on each opponent pre 15 minutes as a botlaner.'
  ),
  category: 'combat',
};

export default theWanderer;
