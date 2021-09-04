import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theDragonMaster: TrophyBase = {
  island: 'objectives',
  name: 'theDragonMaster',
  level: 'objectives3',
  title: i18n('The Dragon Master'),
  description: i18n('Kill the first dragon before 10 minutes into the game.'),
  category: 'objectives',
};

export default theDragonMaster;
