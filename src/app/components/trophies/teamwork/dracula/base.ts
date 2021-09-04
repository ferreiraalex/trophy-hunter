import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const dracula: TrophyBase = {
  island: 'teamwork',
  name: 'dracula',
  level: 'teamwork2',
  title: i18n('Dracula'),
  description: i18n('Heal more than 2000 damage with Taste of Blood (rune).'),
  category: 'teamwork',
  maxProgress: 2000,
};

export default dracula;
