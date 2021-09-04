import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const quackery: TrophyBase = {
  island: 'teamwork',
  name: 'quackery',
  level: 'teamwork4',
  title: i18n('Quackery'),
  description: i18n('Heal five players and at least 15000 damage.'),
  category: 'teamwork',
};

export default quackery;
