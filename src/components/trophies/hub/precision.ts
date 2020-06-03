import { Trophy } from '../types';
import SkillsProgress from '../skills/SkillsProgress';

const precision: Trophy = {
  island: 'hubIsland',
  name: 'precision',
  level: 'hubSkills',
  title: 'Precision',
  description:
    'Be 15 cs ahead of your lane opponent at 10 minutes as top, mid or adc.',
  ProgressIcon: SkillsProgress,
  checkProgress: ({ match, account }) => {
    const participantIdentity = match.participantIdentities.find(
      (participantIdentity) =>
        participantIdentity.player.accountId === account.summoner.accountId
    );
    const participant = match.participants.find(
      (participant) =>
        participant.participantId === participantIdentity.participantId
    );
    const opponent = match.participants.find(
      (otherParticipant) =>
        otherParticipant.participantId !== participant.participantId &&
        otherParticipant.timeline.role === participant.timeline.role
    );

    const creepsDiffAt10 =
      participant.timeline.creepsPerMinDeltas['0-10'] * 10 -
      opponent.timeline.creepsPerMinDeltas['0-10'] * 10;

    return Number(creepsDiffAt10 >= 15);
  },
  checkLive: ({ allPlayers, trophyData, gameData, account }) => {
    if (!allPlayers || !gameData || trophyData.precision) {
      return 0;
    }
    if (gameData.gameTime >= 600 && gameData.gameTime < 660) {
      return 0;
    }

    trophyData.precision = true;

    const accountPlayer = allPlayers.find(
      (player) => player.summonerName === account.summoner.name
    );
    const opponent = allPlayers.find(
      (player) =>
        player.position === accountPlayer.position &&
        player.team !== accountPlayer.team
    );
    if (!opponent) {
      console.log(
        `Can not find lane opponent for ${accountPlayer.summonerName} as ${accountPlayer.position}`
      );
      return;
    }

    return Number(
      accountPlayer.scores.creepScore >= opponent.scores.creepScore + 15
    );
  },
};

export default precision;