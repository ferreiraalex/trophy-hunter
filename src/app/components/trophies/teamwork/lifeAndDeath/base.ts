import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const lifeAndDeath: TrophyBase = {
  island: 'teamwork',
  name: 'lifeAndDeath',
  level: 'teamwork3',
  title: i18n('Life And Death'),
  description: i18n(
    'Deal and heal more than 2500 in total with grasp of the undying (rune).'
  ),
  category: 'teamwork',
  maxProgress: 2500,
};

export default lifeAndDeath;
