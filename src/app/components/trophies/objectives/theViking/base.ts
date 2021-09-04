import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

export const REQUIRED_MINUTES = 11;

const theViking: TrophyBase = {
  island: 'hub',
  name: 'theViking',
  level: 'hubObjectives',
  title: i18n('The Viking'),
  description: i18n(
    'Get a solo kill before 11 minutes and take down or assist first tower.'
  ),
  category: 'objectives',
};

export default theViking;
