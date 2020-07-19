import { Trophy } from '../types';
import {
  getParticipantByAccount,
  getParticipantKillsAndAssists,
} from '../../../api/riot/helpers';

const omnipresent: Trophy = {
  island: 'teamworkIsland',
  name: 'omnipresent',
  level: 'teamwork7',
  title: 'Omnipresent',
  description: 'Be involved in more than 80% of your teams kills.',
  category: 'teamwork',
  checkProgress: ({ match, events, account }) => {
    const participant = getParticipantByAccount(match, account);
    const teamParticipantIds = match.participants
      .filter((other) => other.teamId === participant.teamId)
      .map((teammate) => teammate.participantId);

    const killsAndAssists = getParticipantKillsAndAssists(
      events,
      participant.participantId
    ).length;

    const teamkills = events.filter(
      (event) =>
        event.type === 'CHAMPION_KILL' &&
        teamParticipantIds.includes(event.killerId)
    ).length;

    return Number(killsAndAssists / teamkills >= 0.8);
  },
};

export default omnipresent;