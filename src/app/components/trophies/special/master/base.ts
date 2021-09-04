import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const master: TrophyBase = {
  island: 'special',
  name: 'master',
  level: 'special3',
  title: i18n('Master'),
  description: i18n('Play 200 matches with the trophy hunter app.'),
  category: 'special',
  maxProgress: 200,
  aramSupport: true,
};

export default master;
