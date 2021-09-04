import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const watcher: TrophyBase = {
  island: 'teamwork',
  name: 'watcher',
  level: 'teamwork5',
  title: i18n('Watcher'),
  description: i18n('Place at least 15 wards.'),
  category: 'teamwork',
  maxProgress: 15,
};

export default watcher;
