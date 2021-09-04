import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const tripleAssist: TrophyBase = {
  island: 'teamwork',
  name: 'tripleAssist',
  level: 'teamwork1',
  title: i18n('Triple Assist'),
  description: i18n(
    'Achieve three assists with no more than ten seconds between two successive assists.\nARAM: Two triple assists'
  ),
  category: 'teamwork',
  aramSupport: true,
};

export default tripleAssist;
