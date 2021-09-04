import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const leagueOfDraven: TrophyBase = {
  island: 'skills',
  name: 'leagueOfDraven',
  level: 'skills6',
  title: i18n('League Of Draven'),
  description: i18n(
    'Win a game where all of your teammates assisted you at least as many kills as they killed themselves.'
  ),
  category: 'skills',
};

export default leagueOfDraven;
