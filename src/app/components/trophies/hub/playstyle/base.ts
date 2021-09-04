import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const playstyle: TrophyBase = {
  island: 'hub',
  name: 'playstyle',
  level: 'welcome',
  title: i18n('New Born'),
  description: i18n(
    "Play one game of Summoner's Rift or ARAM with the Trophy Hunter app."
  ),
  category: 'hub',
  aramSupport: true,
};

export default playstyle;
