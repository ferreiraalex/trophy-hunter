import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const teamPlayer: TrophyBase = {
  island: 'teamwork',
  name: 'teamPlayer',
  level: 'teamwork1',
  title: i18n('Team Player'),
  description: i18n('Score at least ten assists.\nARAM: 20 assists'),
  category: 'teamwork',
  aramSupport: true,
};

export default teamPlayer;
