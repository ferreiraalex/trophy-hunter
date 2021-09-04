import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theGrandChallenge: TrophyBase = {
  island: 'objectives',
  name: 'theGrandChallenge',
  level: 'objectives5',
  title: i18n('The Grand Challenge'),
  description: i18n(
    'Get a solo-kill and take an inhib-turret or an inhibitor in the 25 seconds after that.'
  ),
  category: 'objectives',
};

export default theGrandChallenge;
