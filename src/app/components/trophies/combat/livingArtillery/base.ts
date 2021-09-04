import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const livingArtillery: TrophyBase = {
  island: 'combat',
  name: 'livingArtillery',
  level: 'combat5',
  title: i18n('Living Artillery'),
  description: i18n("Deal more than 35% of your team's damage."),
  category: 'combat',
};

export default livingArtillery;
