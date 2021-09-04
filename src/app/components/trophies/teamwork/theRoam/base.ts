import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theRoam: TrophyBase = {
  island: 'teamwork',
  name: 'theRoam',
  level: 'teamwork8',
  title: i18n('The Roam'),
  description: i18n(
    'You are support and you participate in a kill on midlane pre 10 minutes and your ADC may not die in +-10 seconds around that kill.'
  ),
  category: 'teamwork',
};

export default theRoam;
