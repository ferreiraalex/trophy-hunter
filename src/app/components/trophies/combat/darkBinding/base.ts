import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const darkBinding: TrophyBase = {
  island: 'combat',
  name: 'darkBinding',
  level: 'combat7',
  title: i18n('Dark Binding'),
  description: i18n(
    'CC enemy champions for at least 100 seconds (soft cc counts for 1/2, slows count for 1/6 of their duration).'
  ),
  category: 'combat',
};

export default darkBinding;
