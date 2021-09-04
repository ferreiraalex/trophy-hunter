import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const sheepHunter: TrophyBase = {
  island: 'combat',
  name: 'sheepHunter',
  level: 'combat2',
  title: i18n('Sheep Hunter'),
  description: i18n(
    'Kill five opponents who are at least two levels below you.'
  ),
  category: 'combat',
};

export default sheepHunter;
