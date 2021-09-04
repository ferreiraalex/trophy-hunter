import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const stomp: TrophyBase = {
  island: 'objectives',
  name: 'stomp',
  level: 'objectives4',
  title: i18n('Stomp'),
  description: i18n('Win a game in less than 22 minutes.\nARAM: 16 minutes'),
  category: 'objectives',
  aramSupport: true,
};

export default stomp;
