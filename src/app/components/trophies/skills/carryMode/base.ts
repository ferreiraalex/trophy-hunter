import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const carryMode: TrophyBase = {
  island: 'skills',
  name: 'carryMode',
  level: 'skills5',
  title: i18n('Carry Mode'),
  description: i18n(
    'Win a game where you have more than half of your teams kills.'
  ),
  category: 'skills',
};

export default carryMode;
