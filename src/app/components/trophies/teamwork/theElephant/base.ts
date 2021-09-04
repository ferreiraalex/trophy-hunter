import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

export const SUMMONERS_RIFT_MINUTES = 19;
export const ARAM_MINUTES = 9;

const theElephant: TrophyBase = {
  island: 'hub',
  name: 'theElephant',
  level: 'hubTeamwork',
  title: i18n('The Elephant'),
  description: i18n('Do not die for more than 19 minutes.\nARAM: 9 minutes'),
  category: 'teamwork',
  aramSupport: true,
};

export default theElephant;
