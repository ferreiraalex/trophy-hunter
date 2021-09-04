import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const revenantOfTheKaiser: TrophyBase = {
  island: 'epic',
  name: 'revenantOfTheKaiser',
  level: 'epic1',
  title: i18n('Revenant Of The Kaiser'),
  description: i18n(
    'Kill the elder dragon, then secure baron nashor in the 60 seconds following.'
  ),
  category: 'epic',
};

export default revenantOfTheKaiser;
