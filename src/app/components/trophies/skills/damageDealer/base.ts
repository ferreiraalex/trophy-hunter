import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const damageDealer: TrophyBase = {
  island: 'skills',
  name: 'damageDealer',
  level: 'skills1',
  title: i18n('Damage Dealer'),
  description: i18n('Deal more than 100k total damage.'),
  category: 'skills',
  maxProgress: 100000,
};

export default damageDealer;
