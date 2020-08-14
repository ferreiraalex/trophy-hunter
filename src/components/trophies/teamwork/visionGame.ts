import { Trophy } from '../types';
import { getParticipantByAccount } from '../../../api/riot/helpers';

const visionGame: Trophy = {
  island: 'teamworkIsland',
  name: 'visionGame',
  level: 'teamwork8',
  title: 'Vision Game',
  description:
    '*Place at least four control wards, Clear at least four wards and place at least 20 wards.',
  category: 'teamwork',
  checkProgress: ({ match, account }) => {
    const participant = getParticipantByAccount(match, account);

    return Number(
      participant.stats.visionWardsBoughtInGame >= 4 &&
        participant.stats.wardsPlaced >= 20 &&
        participant.stats.wardsKilled >= 4
    );
  },
};

export default visionGame;
