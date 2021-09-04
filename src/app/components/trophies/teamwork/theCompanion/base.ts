import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theCompanion: TrophyBase = {
  island: 'teamwork',
  name: 'theCompanion',
  level: 'teamwork4',
  title: i18n('The Companion'),
  description: i18n(
    'Deal and shield more than 750 with summoner aery in one match (rune).'
  ),
  category: 'teamwork',
};

export default theCompanion;
