import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theGuard: TrophyBase = {
  island: 'teamwork',
  name: 'theGuard',
  level: 'teamwork5',
  title: i18n('The Guard'),
  description: i18n(
    'Shield your allies for at least 4000 damage using Guardian in one match (rune).'
  ),
  category: 'teamwork',
};

export default theGuard;
