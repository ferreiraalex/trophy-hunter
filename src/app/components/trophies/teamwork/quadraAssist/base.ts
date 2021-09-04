import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const quadraAssist: TrophyBase = {
  island: 'teamwork',
  name: 'quadraAssist',
  level: 'teamwork4',
  title: i18n('Quadra Assist'),
  description: i18n(
    'Achieve four assists with no more than ten seconds between two successive assists.\nARAM: Two quadra assists'
  ),
  category: 'teamwork',
  aramSupport: true,
};

export default quadraAssist;
