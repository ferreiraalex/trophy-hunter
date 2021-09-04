import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theGriffin: TrophyBase = {
  island: 'teamwork',
  name: 'theGriffin',
  level: 'teamwork1',
  title: i18n('The Griffin'),
  description: i18n('Have highest kill participation of your team.'),
  category: 'teamwork',
};

export default theGriffin;
