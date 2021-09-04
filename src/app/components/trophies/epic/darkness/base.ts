import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const darkness: TrophyBase = {
  island: 'hub',
  name: 'darkness',
  level: 'hubEpic',
  title: i18n('Darkness'),
  description: i18n('Destroy at least fifteen enemy wards.'),
  category: 'epic',
  maxProgress: 15,
};

export default darkness;
