import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const controller: TrophyBase = {
  island: 'teamwork',
  name: 'controller',
  level: 'teamwork2',
  title: i18n('Controller'),
  description: i18n('Place at least 6 control wards.'),
  category: 'teamwork',
};

export default controller;
