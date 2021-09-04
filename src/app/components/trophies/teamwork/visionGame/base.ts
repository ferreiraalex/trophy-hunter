import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const visionGame: TrophyBase = {
  island: 'teamwork',
  name: 'visionGame',
  level: 'teamwork8',
  title: i18n('Vision Game'),
  description: i18n(
    'Place at least four control wards, Clear at least four wards and place at least 20 wards.'
  ),
  category: 'teamwork',
};

export default visionGame;
