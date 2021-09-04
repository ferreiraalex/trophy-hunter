import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const prominent: TrophyBase = {
  island: 'special',
  name: 'prominent',
  level: 'special2',
  title: i18n('Prominent'),
  description: i18n('Play 20 matches with another trophy hunter.'),
  category: 'special',
  maxProgress: 20,
  aramSupport: true,
};

export default prominent;
